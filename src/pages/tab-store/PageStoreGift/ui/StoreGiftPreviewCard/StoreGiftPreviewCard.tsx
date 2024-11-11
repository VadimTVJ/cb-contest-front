import { clsx } from 'clsx';
import { motion } from 'framer-motion';
import { type ComponentProps, CSSProperties, forwardRef } from 'react';

import { storeGiftModel } from '../../../../../entities/store-gift';
import { getAssetIcon } from '../../../../../shared/config/assets-icons';
import { giftsLottiesMapping } from '../../../../../shared/config/gifts-lotties';
import { appLocals } from '../../../../../shared/config/locals';
import { SharedGiftLottie } from '../../../SharedGiftLottie';
import styles from './StoreGiftPreviewCard.module.scss';

export interface StoreGiftCardProps extends ComponentProps<'div'> {
  storeGift: storeGiftModel.StoreGift;
}

export const StoreGiftPreviewCard = forwardRef<HTMLDivElement, StoreGiftCardProps>((props, forwardedRef) => {
  const {
    className,
    storeGift,
    ...rest
  } = props;

  const {
    previewGradientTo, previewGradientFrom, asset, purchasedQuantity, totalQuantity, name, price, id
  } = storeGift;
  const formattedTotalQuantity = Intl.NumberFormat('en', { notation: 'compact' }).format(totalQuantity);
  const formattedPurchasedQuantity = Intl.NumberFormat('en', { notation: 'compact' }).format(purchasedQuantity);

  return (
    <div
      ref={forwardedRef}
      className={clsx(styles.StoreGiftPreviewCard, className)}
      {...rest}
    >
      <div
        className={styles.StoreGiftPreviewCard__preview}
        style={{
          '--StoreGiftPreviewCard__preview_gradientFrom': previewGradientFrom,
          '--StoreGiftPreviewCard__preview_gradientTo': previewGradientTo
        } as CSSProperties}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0, delay: appLocals.transitionsDuration + 0.4 }}
        >
          <SharedGiftLottie
            className={styles.StoreGiftPreviewCard__lottie}
            lottieProps={{
              animationData: giftsLottiesMapping[id]
            }}
          />
        </motion.div>

        <motion.div
          className={styles.StoreGiftPreviewCard__wave}
          initial={{ translateX: -500, rotate: 16 }}
          animate={{ translateX: 500, rotate: 16 }}
          transition={{ duration: 0.75, delay: appLocals.transitionsDuration }}
        />
      </div>
      <div className={styles.StoreGiftPreviewCard__header}>
        <h1 className={styles.StoreGiftPreviewCard__name}>{name}</h1>
        <span className={styles.StoreGiftPreviewCard__availableAmount}>
          {`${formattedPurchasedQuantity} of ${formattedTotalQuantity}`}
        </span>
      </div>
      <div className={styles.StoreGiftPreviewCard__tint}>Purchase this gift for the opportunity to give it to another user.</div>

      <div className={styles.StoreGiftPreviewCard__price}>
        <span
          className={styles.StoreGiftPreviewCard__priceIcon}
          style={{ backgroundColor: asset.appearanceColor }}
        >
          {getAssetIcon(asset.id, { width: 10 })}
        </span>
        {`${price} ${asset.name}`}
      </div>
    </div>
  );
});

StoreGiftPreviewCard.displayName = 'StoreGiftCard';
