import { mainButton } from '@telegram-apps/sdk-react';
import { useEffect } from 'react';

import { purchasedGiftModel } from '../../../../../../entities/purchased-gift';
import { useSendPurchasedGift } from '../../../../../../features/purchased-gift/send';

export const useMainButton = (purchasedGiftId: purchasedGiftModel.PurchasedGiftId) => {
  const { sendGift } = useSendPurchasedGift();

  useEffect(() => {
    const createInvoice = () => sendGift(purchasedGiftId);

    const offClick = mainButton.onClick(createInvoice);
    mainButton.setParams({
      text: 'Send Gift to Contact',
      isVisible: true,
      isEnabled: true
    });

    return () => {
      offClick();
      mainButton.setParams({
        isVisible: false
      });
    };
  }, []);
};
