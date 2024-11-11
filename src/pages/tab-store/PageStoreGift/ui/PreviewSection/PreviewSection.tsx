import { clsx } from 'clsx';
import { type ComponentProps, forwardRef } from 'react';

import { storeGiftApi, storeGiftModel } from '../../../../../entities/store-gift';
import { StoreGiftPreviewCard } from '../StoreGiftPreviewCard';
import styles from './PreviewSection.module.scss';

export interface PreviewSectionProps extends ComponentProps<'div'> {
  storeGiftId: storeGiftModel.StoreGiftId;
}

export const PreviewSection = forwardRef<HTMLDivElement, PreviewSectionProps>((props, forwardedRef) => {
  const { className, storeGiftId, ...rest } = props;

  const { data, status } = storeGiftApi.useStoreGiftQuery({
    params: { storeGiftId }
  });

  return (
    <div
      ref={forwardedRef}
      className={clsx(styles.PreviewSection, className)}
      {...rest}
    >
      {/* todo skeleton and error state */}
      {/* {status === 'pending' && 'skeleton'} */}
      {status === 'success' && <StoreGiftPreviewCard storeGift={data} />}
    </div>
  );
});

PreviewSection.displayName = 'PreviewSection';
