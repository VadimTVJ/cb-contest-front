import { ReactNode } from 'react';
import Lottie from 'react-lottie-player';
import { useParams } from 'react-router-dom';

import { storeGiftApi } from '../../../entities/store-gift';
import { giftsLottiesMapping } from '../../../shared/config/gifts-lotties';
import { Page, Placeholder } from '../../../shared/ui';
import { useMainButtons } from './hooks';
import styles from './PageGiftPurchased.module.scss';

export const PageGiftPurchased = (): ReactNode => {
  useMainButtons();

  const { storeGiftId } = useParams();
  const { data } = storeGiftApi.useStoreGiftQuery({
    params: { storeGiftId: Number(storeGiftId) }
  });

  return (
    <Page className={styles.PageGiftPurchased}>
      <Placeholder
        className={styles.PageGiftPurchased__placeholder}
        icon={(
          <Lottie
            play
            loop
            className={styles.PageGiftPurchased__lottie}
            animationData={giftsLottiesMapping[Number(storeGiftId)]}
          />
        )}
        heading="Gift Purchased"
        subHeading={data && `The ${data.name} gift was purchased for ${data.price} ${data.asset.name}.`}
      />
    </Page>
  );
};

PageGiftPurchased.displayName = 'PageGiftPurchased';
