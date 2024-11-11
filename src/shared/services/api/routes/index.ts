import { feedRoutes } from './feed';
import { invoiceRoutes } from './invoice';
import { purchasedGiftsRoutes } from './purchased-gift';
import { storeGiftsRoutes } from './store-gift';
import { userRoutes } from './user';

export const Api = {
  storeGift: storeGiftsRoutes,
  purchasedGift: purchasedGiftsRoutes,
  user: userRoutes,
  invoice: invoiceRoutes,
  feed: feedRoutes
};
