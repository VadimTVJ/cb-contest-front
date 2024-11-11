import { useQueryClient } from '@tanstack/react-query';
import { openTelegramLink } from '@telegram-apps/sdk-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { feedApi } from '../../../entities/feed';
import { invoiceApi } from '../../../entities/invoice';
import { purchasedGiftApi } from '../../../entities/purchased-gift';
import { storeGiftApi } from '../../../entities/store-gift';
import { useCreateInvoiceMutation } from './api';

export const useBuyStoreGift = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [storeGiftId, setStoreGiftId] = useState<null | number>(null);
  const [invoiceId, setInvoiceId] = useState<null | number>(null);
  const [listeningStatus, setListeningStatus] = useState(false);

  const checkInvoiceStatus = async (invoiceId: number) => {
    const query = invoiceApi.getInvoiceStatusQuery({
      params: { invoiceId }
    });
    await queryClient.invalidateQueries({ queryKey: query.queryKey });
    const { status } = await queryClient.fetchQuery(query);

    if (status === 'paid' && storeGiftId) {
      navigate('purchased');

      await queryClient.refetchQueries(purchasedGiftApi.getAvailableGiftsQuery({}));
      await queryClient.refetchQueries(storeGiftApi.getStoreGiftQuery({
        params: { storeGiftId }
      }));
      await queryClient.refetchQueries(storeGiftApi.getStoreGiftsQuery({}));
      await queryClient.refetchQueries(feedApi.getFeedQuery({
        params: { storeGiftId, actions: ['buy_gift', 'sent_gift'] }
      }));
    }
  };

  useEffect(() => {
    if (!listeningStatus || !invoiceId) return;

    const interval = setInterval(() => {
      checkInvoiceStatus(invoiceId);
    }, 5_000);

    return () => {
      clearInterval(interval);
    };
  }, [listeningStatus, invoiceId]);

  return useCreateInvoiceMutation({
    onSuccess: (invoice, { storeGiftId }) => {
      const { invoice_id: id, mini_app_invoice_url: miniAppPayUrl } = invoice;
      openTelegramLink(miniAppPayUrl);
      setListeningStatus(true);
      setInvoiceId(id);
      setStoreGiftId(storeGiftId);
    }
  });
};
