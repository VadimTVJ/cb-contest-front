import { clsx } from 'clsx';
import dayjs from 'dayjs';
import { forwardRef } from 'react';
import Lottie from 'react-lottie-player';

import { purchasedGiftModel } from '../../entities/purchased-gift';
import { giftsLottiesMapping } from '../../shared/config/gifts-lotties';
import { Modal, ModalProps, Table, TableCell } from '../../shared/ui';
import { useMainButton } from './hooks';
import styles from './ReceivedGiftModal.module.scss';

export interface SendGiftModalProps extends ModalProps {
  purchasedGift: purchasedGiftModel.PurchasedGift;
}

export const ReceivedGiftModal = forwardRef<HTMLDivElement, SendGiftModalProps>((props, forwardedRef) => {
  const { className, purchasedGift, ...rest } = props;
  const { storeGift, customer, receivedDate, index } = purchasedGift;
  const formattedTotalQuantity = new Intl.NumberFormat('ru-RU').format(storeGift.totalQuantity);
  const formattedIndex = new Intl.NumberFormat('ru-RU').format(index);

  useMainButton();

  return (
    <Modal
      ref={forwardedRef}
      className={clsx(styles.ReceivedGiftModal, className)}
      {...rest}
    >
      <div className={styles.ReceivedGiftModal__in}>
        <Lottie
          play
          loop
          className={styles.ReceivedGiftModal__preview}
          animationData={giftsLottiesMapping[storeGift.id]}
        />
      </div>

      <h2 className={styles.ReceivedGiftModal__name}>{storeGift.name}</h2>

      <Table className={styles.ReceivedGiftModal__table}>
        <TableCell label="From" value={customer.firstName} />
        <TableCell label="Date" value={dayjs(receivedDate).format('DD.MM.YY, HH:mm')} />
        <TableCell label="Price" value={`${storeGift.price} ${storeGift.asset.name}`} />
        <TableCell label="Availability" value={`${formattedIndex} of ${formattedTotalQuantity}`} />
      </Table>
    </Modal>
  );
});

ReceivedGiftModal.displayName = 'ReceivedGiftModal';
