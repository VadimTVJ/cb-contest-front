import { getStoreGiftApiRequest } from './get';
import { getStoreGiftsApiRequest } from './get-all';

export const storeGiftsRoutes = {
  getAll: getStoreGiftsApiRequest,
  get: getStoreGiftApiRequest
};

export type { GetStoreGiftApiParams, GetStoreGiftApiResponse } from './get';
export type { GetStoreGiftsApiParams, GetStoreGiftsApiResponse } from './get-all';
