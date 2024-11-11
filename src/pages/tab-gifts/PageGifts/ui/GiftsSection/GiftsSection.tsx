import { clsx } from 'clsx';
import { type ComponentProps, forwardRef, Fragment } from 'react';

import { purchasedGiftApi } from '../../../../../entities/purchased-gift';
import { Grid } from '../../../../../shared/ui';
import { NoGiftsPlaceholder } from '../NoGiftsPlaceholder';
import { PurchasedGiftCard, PurchasedGiftCardSkeleton } from '../PurchasedGiftCard';
import styles from './GiftsSection.module.scss';

export interface GiftsSectionProps extends ComponentProps<'div'> {}

export const GiftsSection = forwardRef<HTMLDivElement, GiftsSectionProps>((props, forwardedRef) => {
  const { className, ...rest } = props;

  const { data, status } = purchasedGiftApi.useAvailableGiftsQuery();

  return (
    <div
      ref={forwardedRef}
      className={clsx(styles.GiftsSection, className)}
      {...rest}
    >
      {status === 'success' && !data.pages[0].length && <NoGiftsPlaceholder />}

      {status === 'error' && 'error'}

      {((status === 'success' && data.pages[0].length) || status === 'pending') && (
        <Grid cols={3} gap="8px">
          {status === 'pending' && [...Array(9)].map((_, index) => (
            <PurchasedGiftCardSkeleton key={index} />
          ))}

          {status === 'success' && data.pages.map((page, index) => (
            <Fragment key={index}>
              {page.map((purchasedGift) => (
                <PurchasedGiftCard
                  key={purchasedGift.id}
                  purchasedGift={purchasedGift}
                />
              ))}
            </Fragment>
          ))}
        </Grid>
      )}
    </div>
  );
});

GiftsSection.displayName = 'GiftsSection';
