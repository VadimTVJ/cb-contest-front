import { clsx } from 'clsx';
import { type ComponentProps, forwardRef, Fragment } from 'react';

import { ProfileGiftCard, purchasedGiftApi } from '../../entities/purchased-gift';
import { useSetModal } from '../../shared/lib/modals';
import { Grid } from '../../shared/ui';
import { NoReceivedGiftsPlaceholder } from '../NoReceivedGiftsPlaceholder';
import { ReceivedGiftModal } from '../ReceivedGiftModal';
import styles from './ReceivedGiftsSection.module.scss';

export interface GiftsSectionProps extends ComponentProps<'div'> {
  tgId: number;
}

export const ReceivedGiftsSection = forwardRef<HTMLDivElement, GiftsSectionProps>((props, forwardedRef) => {
  const { className, tgId, ...rest } = props;

  const setModal = useSetModal();

  const { data, status } = purchasedGiftApi.useReceivedGiftsQuery({
    params: { tgId }
  });

  return (
    <div
      ref={forwardedRef}
      className={clsx(styles.ReceivedGiftsSection, className)}
      {...rest}
    >
      {status === 'success' && !data.pages[0].length && <NoReceivedGiftsPlaceholder />}

      <Grid cols={3} gap="8px">
        {/* todo skeleton state */}
        {/* {status === 'pending' && 'skeleton'} */}

        {(status === 'success' && !!data.pages[0].length) && data.pages.map((page, index) => (
          <Fragment key={index}>
            {page.map((purchasedGift) => (
              <ProfileGiftCard
                key={purchasedGift.id}
                purchasedGift={purchasedGift}
                onClick={() => setModal(
                  <ReceivedGiftModal
                    purchasedGift={purchasedGift}
                    onClose={() => setModal(null)}
                  />
                )}
              />
            ))}
          </Fragment>
        ))}
      </Grid>
    </div>
  );
});

ReceivedGiftsSection.displayName = 'GiftsSection';
