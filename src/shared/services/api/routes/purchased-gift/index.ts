import { getActivateHashApiRequest } from './get-activate-hash';
import { getAvailableGiftsApiRequest } from './get-available';
import { getReceivedGiftsApiRequest } from './get-received';

export const purchasedGiftsRoutes = {
  getAvailable: getAvailableGiftsApiRequest,
  getActivateHash: getActivateHashApiRequest,
  getReceived: getReceivedGiftsApiRequest
};

export type { GetActivateHashApiParams, GetActivateHashApiResponse } from './get-activate-hash';
export type { GetAvailableGiftsApiParams, GetAvailableGiftsApiResponse } from './get-available';
export type { GetReceivedGiftsApiParams, GetReceivedGiftsApiResponse } from './get-received';
