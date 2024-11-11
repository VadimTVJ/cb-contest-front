import { clsx } from 'clsx';
import dayjs from 'dayjs';
import { forwardRef } from 'react';
import Lottie from 'react-lottie-player';

import { purchasedGiftModel } from '../../../../../entities/purchased-gift';
import { giftsLottiesMapping } from '../../../../../shared/config/gifts-lotties';
import { Modal, ModalProps, Table, TableCell } from '../../../../../shared/ui';
import { useMainButton } from './hooks';
import styles from './SendGiftModal.module.scss';

export interface SendGiftModalProps extends ModalProps {
  purchasedGift: purchasedGiftModel.PurchasedGift;
}

export const SendGiftModal = forwardRef<HTMLDivElement, SendGiftModalProps>((props, forwardedRef) => {
  const { className, purchasedGift, ...rest } = props;
  const { storeGift, id, purchasedDate, index } = purchasedGift;
  const formattedTotalQuantity = new Intl.NumberFormat('ru-RU').format(storeGift.totalQuantity);
  const formattedIndex = new Intl.NumberFormat('ru-RU').format(index);

  useMainButton(id);

  return (
    <Modal
      ref={forwardedRef}
      className={clsx(styles.SendGiftModal, className)}
      {...rest}
    >
      <div className={styles.SendGiftModal__in}>
        <Lottie
          play
          loop
          className={styles.SendGiftModal__preview}
          animationData={giftsLottiesMapping[storeGift.id]}
        />
      </div>

      <h2 className={styles.SendGiftModal__name}>Send Gift</h2>

      <Table className={styles.SendGiftModal__table}>
        <TableCell label="Gift" value={storeGift.name} />
        <TableCell label="Date" value={dayjs(purchasedDate).format('DD.MM.YY, HH:mm')} />
        <TableCell label="Price" value={`${storeGift.price} ${storeGift.asset.name}`} />
        <TableCell label="Availability" value={`${formattedIndex} of ${formattedTotalQuantity}`} />
      </Table>
    </Modal>
  );
});

SendGiftModal.displayName = 'SendGiftModal';
