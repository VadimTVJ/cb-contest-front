import { clsx } from 'clsx';
import { type ComponentProps, forwardRef, Fragment } from 'react';

import { storeGiftApi } from '../../../../../entities/store-gift';
import { Grid } from '../../../../../shared/ui';
import { StoreGiftCard, StoreGiftCardSkeleton } from '../StoreGiftCard';
import styles from './GiftsSection.module.scss';

export interface GiftsSectionProps extends ComponentProps<'div'> {}

export const GiftsSection = forwardRef<HTMLDivElement, GiftsSectionProps>((props, forwardedRef) => {
  const { className, ...rest } = props;

  const { data, status } = storeGiftApi.useStoreGiftsQuery();

  return (
    <div
      ref={forwardedRef}
      className={clsx(styles.GiftsSection, className)}
      {...rest}
    >
      <Grid cols={2} gap="12px">
        {status === 'pending' && [...Array(4)].map((_, index) => (
          <StoreGiftCardSkeleton key={index} />
        ))}

        {status === 'success' && data.pages.map((page, index) => (
          <Fragment key={index}>
            {page.map((storeGift) => (
              <StoreGiftCard
                key={storeGift.id}
                storeGift={storeGift}
              />
            ))}
          </Fragment>
        ))}
      </Grid>
    </div>
  );
});

GiftsSection.displayName = 'GiftsSection';
