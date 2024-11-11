import { clsx } from 'clsx';
import { AnimationItem } from 'lottie-web';
import mergeRefs from 'merge-refs';
import { ComponentProps, forwardRef, useRef } from 'react';
import Lottie, { LottieProps } from 'react-lottie-player';

import styles from './SharedGiftLottie.module.scss';

export interface SharedGiftLottieProps extends ComponentProps<'div'> {
  lottieProps: LottieProps
}

export const SharedGiftLottie = forwardRef<HTMLDivElement, SharedGiftLottieProps>((props, forwardedRef) => {
  const { className, lottieProps, ...rest } = props;

  const lottieRef = useRef<AnimationItem>(null);

  return (
    <div
      ref={forwardedRef}
      className={clsx(styles.SharedGiftLottie, className)}
      {...rest}
    >
      <Lottie
        play
        loop={false}
        {...lottieProps}
        ref={mergeRefs(lottieProps.ref, lottieRef)}
        onComplete={(args) => {
          lottieProps.onComplete?.(args);

          if (!lottieRef.current) return;
          const curDirection = lottieRef.current.playDirection;
          lottieRef.current.setDirection(curDirection > 0 ? -1 : 1);
          lottieRef.current.play();
        }}
      />
    </div>
  );
});

SharedGiftLottie.displayName = 'SharedGiftLottie';
