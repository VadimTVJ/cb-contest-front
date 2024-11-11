import { useAnimate } from 'framer-motion';
import { AnimationItem } from 'lottie-web';
import { ReactNode, RefObject, useEffect, useImperativeHandle, useRef, useState } from 'react';

import { appLocals } from '../../../shared/config/locals';
import { buildBezierTrajectory } from '../../../shared/lib/build-bezier-trajectory';
import { SharedGiftLottie } from '../SharedGiftLottie';

export type StoreTabMaskActionsType = {
  cloneElement: (animationData: unknown, boundsFrom: DOMRect, initialFrame: number) => void;
  assignLottieRef: (lottieRef?: AnimationItem) => void;
}

export interface StoreTabMaskProps {
  maskActionsRef: RefObject<StoreTabMaskActionsType>;
}

export const StoreTabMask = (props: StoreTabMaskProps): ReactNode => {
  const { maskActionsRef } = props;

  const [scope, animate] = useAnimate<HTMLDivElement>();

  const lottieRef = useRef<AnimationItem>(null);
  const lottieCardsRef = useRef<AnimationItem[]>([]);

  const [isCloned, setIsCloned] = useState(false);
  const [animationData, setAnimationData] = useState<unknown>();
  const [initialBounds, setInitialBounds] = useState<DOMRect | null>(null);
  const [initialFrame, setInitialFrame] = useState<number>(0);

  useImperativeHandle(maskActionsRef, () => {
    return {
      cloneElement: (animationData, boundsFrom, initialFrame) => {
        // Останавливаем лотти в карточках, для повышения производительности
        lottieCardsRef.current.forEach((lottieCardRef) => {
          lottieCardRef.pause();
        });

        setAnimationData(animationData);
        setInitialBounds(boundsFrom);
        setInitialFrame(initialFrame);

        setIsCloned(true);
      },
      assignLottieRef: (lottieRef) => {
        if (!lottieRef) return;

        lottieCardsRef.current.push(lottieRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isCloned || !initialBounds || !lottieRef.current) return;

    // Синхронизируем, чтобы у оригинального лотти и клонированного был одинаковый фрейм
    lottieRef.current.goToAndPlay(initialFrame, true);

    // Расчитываем координаты приземления (todo refactor)
    const targetSize = 268;
    const targetX = window.innerWidth / 2 - targetSize / 2;
    const targetY = targetX;

    // Собираем массив x,y для траектории движения склонированной лотти
    const { xPoints, yPoints } = buildBezierTrajectory(
      initialBounds.x,
      initialBounds.y,
      targetX,
      targetY
    );

    // Газуем анимацию
    animate(scope.current, {
      x: xPoints,
      y: yPoints,
      width: targetSize
    }, {
      ease: 'easeOut',
      duration: appLocals.transitionsDuration,
      onComplete: () => setTimeout(() => setIsCloned(false), 500)
    });
  }, [isCloned]);

  if (!isCloned || !animationData) return null;

  return (
    <SharedGiftLottie
      ref={scope}
      style={{
        position: 'absolute',
        transform: `translateX(${initialBounds?.left}) translateY(${initialBounds?.top})`,
        width: initialBounds?.width,
        zIndex: 100,
        willChange: 'transform, width'
      }}
      lottieProps={{
        ref: lottieRef,
        animationData,
        play: true
      }}
    />
  );
};

StoreTabMask.displayName = 'StoreTabMask';
