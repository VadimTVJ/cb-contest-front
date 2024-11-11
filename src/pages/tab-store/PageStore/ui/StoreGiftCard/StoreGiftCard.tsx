import { clsx } from 'clsx';
import { useInView } from 'framer-motion';
import { AnimationItem } from 'lottie-web';
import mergeRefs from 'merge-refs';
import { type ComponentProps, CSSProperties, forwardRef, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { storeGiftModel } from '../../../../../entities/store-gift';
import { assetsIconsMapping } from '../../../../../shared/config/assets-icons';
import { giftsLottiesMapping } from '../../../../../shared/config/gifts-lotties';
import { Button, SimpleSkeleton } from '../../../../../shared/ui';
import { SharedGiftLottie } from '../../../SharedGiftLottie';
import { useMaskActions } from '../../../StoreTabLayout/MaskActionsContext';
import styles from './StoreGiftCard.module.scss';

export interface StoreGiftCardProps extends ComponentProps<'div'> {
  storeGift: storeGiftModel.StoreGift;
}

export const StoreGiftCard = forwardRef<HTMLDivElement, StoreGiftCardProps>((props, forwardedRef) => {
  const {
    className,
    storeGift,
    style,
    ...rest
  } = props;

  const {
    name, previewGradientFrom, id, previewGradientTo, purchasedQuantity, totalQuantity, asset, price
  } = storeGift;
  const lottieData = giftsLottiesMapping[id];
  const formattedTotalQuantity = Intl.NumberFormat('en', { notation: 'compact' }).format(totalQuantity);
  const formattedPurchasedQuantity = Intl.NumberFormat('en', { notation: 'compact' }).format(purchasedQuantity);
  const soldOut = purchasedQuantity >= totalQuantity;

  const ref = useRef<HTMLDivElement>(null);
  const lottieContainerRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<AnimationItem>(null);

  const [isCloned, setIsCloned] = useState(false);

  const isInView = useInView(ref);
  const { maskActionsRef } = useMaskActions();

  const cloneLottieToMask = () => {
    if (!maskActionsRef.current || !lottieContainerRef.current || !lottieRef.current) return;

    const lottieBounds = lottieContainerRef.current.getBoundingClientRect();
    const currentFrame = lottieRef.current.getDuration();

    maskActionsRef.current.cloneElement(lottieData, lottieBounds, currentFrame);
    setIsCloned(true);
  };

  useEffect(() => {
    if (!lottieRef.current) return;

    const isLottieAnimating = lottieRef.current.isPaused;
    if (isInView && !isLottieAnimating) {
      lottieRef.current.play();
    } else if (!isInView && isLottieAnimating) {
      lottieRef.current.stop();
    }
  }, [isInView]);

  return (
    <div
      ref={mergeRefs(ref, forwardedRef)}
      className={clsx(styles.StoreGiftCard, className)}
      style={{
        '--StoreGiftCard_gradientFrom': previewGradientFrom,
        '--StoreGiftCard_gradientTo': previewGradientTo,
        ...style
      } as CSSProperties}
      {...rest}
    >
      <div className={styles.StoreGiftCard__availableAmount}>
        {`${formattedPurchasedQuantity} of ${formattedTotalQuantity}`}
      </div>

      <SharedGiftLottie
        ref={lottieContainerRef}
        className={clsx(styles.StoreGiftCard__preview, {
          [styles.StoreGiftCard__preview_hidden]: isCloned
        })}
        lottieProps={{
          ref: mergeRefs(lottieRef, maskActionsRef.current?.assignLottieRef),
          animationData: lottieData
        }}
      />

      <h3 className={styles.StoreGiftCard__name}>{name}</h3>

      {soldOut && (
        <Button
          className={styles.GiftCard__action}
          disabled
        >
          Sold out
        </Button>
      )}

      {!soldOut && (
        <Button
          className={styles.GiftCard__action}
          before={assetsIconsMapping[asset.id]}
          onClick={cloneLottieToMask}
          asChild
        >
          <Link to={`/store/gift/${id}`}>
            {`${price} ${asset.name}`}
          </Link>
        </Button>
      )}
    </div>
  );
});

StoreGiftCard.displayName = 'StoreGiftCard';

export const StoreGiftCardSkeleton = () => {
  return (
    <SimpleSkeleton className={styles.StoreGiftCardSkeleton} />
  );
};
