import { clsx } from 'clsx';
import { type ComponentProps, forwardRef } from 'react';
import Lottie from 'react-lottie-player';

import { giftsLottiesMapping } from '../../../../shared/config/gifts-lotties';
import { Avatar } from '../../../../shared/ui';
import { PurchasedGift } from '../../model';
import styles from './ProfileGiftCard.module.scss';

export interface ProfileGiftCardProps extends ComponentProps<'div'> {
  purchasedGift: PurchasedGift;
}

export const ProfileGiftCard = forwardRef<HTMLDivElement, ProfileGiftCardProps>((props, forwardedRef) => {
  const { className, purchasedGift, ...rest } = props;
  const { storeGift, customer } = purchasedGift;
  const formattedTotalQuantity = new Intl.NumberFormat('ru-RU').format(storeGift.totalQuantity);

  return (
    <div
      ref={forwardedRef}
      className={clsx(styles.ProfileGiftCard, className)}
      {...rest}
    >
      <div className={styles.ProfileGiftCard__header}>
        <Avatar
          size={16}
          className={styles.ProfileGiftCard__avatar}
          initials={[customer.firstName[0], customer.lastName?.[0]].join('')}
        />
        <div className={styles.ProfileGiftCard__index}>
          {`1 of ${formattedTotalQuantity}`}
        </div>
      </div>

      <Lottie
        className={styles.ProfileGiftCard__preview}
        play
        loop
        animationData={giftsLottiesMapping[storeGift.id]}
      />

      <div className={styles.ProfileGiftCard__name}>{storeGift.name}</div>
    </div>
  );
});

ProfileGiftCard.displayName = 'ProfileGiftCard';
