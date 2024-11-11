import { useQueryClient } from '@tanstack/react-query';
import { retrieveLaunchParams, shareURL, switchInlineQuery } from '@telegram-apps/sdk-react';

import { purchasedGiftApi, purchasedGiftModel } from '../../../entities/purchased-gift';
import { appConfig } from '../../../shared/config/app';

export const useSendPurchasedGift = () => {
  const queryClient = useQueryClient();

  const sendGiftAsInline = async (activateHash: string) => {
    await switchInlineQuery(`gift-${activateHash}`, [
      'users'
    ]);
  };

  const sendGiftAsShare = (activateHash: string) => {
    const url = new URL('https://t.me');
    url.pathname = appConfig.botUsername;
    url.searchParams.append('start', `gift-${activateHash}`);
    const receiveUrl = url.toString();

    shareURL(receiveUrl, 'I have a gift for you! Open link to receive it.');
  };

  const sendGift = async (purchasedGiftId: purchasedGiftModel.PurchasedGiftId) => {
    const { activateHash } = await queryClient.fetchQuery(purchasedGiftApi.getActivateHashQuery({
      params: { purchasedGiftId }
    }));

    const launchParams = retrieveLaunchParams();
    const isBotInline = launchParams.botInline;

    if (isBotInline && switchInlineQuery.isSupported() && retrieveLaunchParams().platform !== 'ios') {
      sendGiftAsInline(activateHash);
    } else {
      sendGiftAsShare(activateHash);
    }
  };

  return {
    sendGift
  };
};
