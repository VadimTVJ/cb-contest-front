import { clsx } from 'clsx';
import { type ComponentProps, forwardRef } from 'react';
import Lottie from 'react-lottie-player';

import { purchasedGiftModel } from '../../../../../entities/purchased-gift';
import { giftsLottiesMapping } from '../../../../../shared/config/gifts-lotties';
import { useSetModal } from '../../../../../shared/lib/modals';
import { Button, SimpleSkeleton } from '../../../../../shared/ui';
import { SendGiftModal } from '../SendGiftModal';
import styles from './PurchasedGiftCard.module.scss';

export interface PurchasedGiftCardProps extends ComponentProps<'div'> {
  purchasedGift: purchasedGiftModel.PurchasedGift;
}

export const PurchasedGiftCard = forwardRef<HTMLDivElement, PurchasedGiftCardProps>((props, forwardedRef) => {
  const {
    className,
    purchasedGift,
    ...rest
  } = props;
  const { storeGift } = purchasedGift;

  const setModal = useSetModal();

  return (
    <div
      ref={forwardedRef}
      className={clsx(styles.PurchasedGiftCard, className)}
      {...rest}
    >
      <div className={styles.PurchasedGiftCard__name}>{storeGift.name}</div>

      <Lottie
        play
        loop
        className={styles.PurchasedGiftCard__preview}
        animationData={giftsLottiesMapping[storeGift.id]}
      />

      <Button
        onClick={() => setModal(
          <SendGiftModal
            onClose={() => setModal(null)}
            purchasedGift={purchasedGift}
          />
        )}
      >
        Send
      </Button>
    </div>
  );
});

PurchasedGiftCard.displayName = 'PurchasedGiftCard';

export const PurchasedGiftCardSkeleton = () => {
  return (
    <SimpleSkeleton className={styles.PurchasedGiftCardSkeleton} />
  );
};
