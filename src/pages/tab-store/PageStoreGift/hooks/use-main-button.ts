import { mainButton } from '@telegram-apps/sdk-react';
import { useEffect } from 'react';

import { storeGiftModel } from '../../../../entities/store-gift';
import { useBuyStoreGift } from '../../../../features/store-gift/buy';
import { appLocals } from '../../../../shared/config/locals';

export const useMainButton = (storeGiftId: storeGiftModel.StoreGiftId) => {
  const { mutate, isPending } = useBuyStoreGift();

  useEffect(() => {
    mainButton.setParams({
      isLoaderVisible: isPending
    });
  }, [isPending]);

  useEffect(() => {
    const createInvoice = () => mutate({ storeGiftId });
    const offClick = mainButton.onClick(createInvoice);

    const timeout = setTimeout(() => {
      mainButton.setParams({
        text: 'Buy a Gift',
        isVisible: true,
        isEnabled: true
      });
    }, appLocals.transitionsDuration * 1_000 * 2);

    return () => {
      clearTimeout(timeout);

      offClick();
      mainButton.setParams({
        isVisible: false
      });
    };
  }, []);
};
