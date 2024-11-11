import { ApiPurchasedGift } from '../../entities';
import { axiosInstance } from '../../instance';

export type GetAvailableGiftsApiParams = {
  take?: number;
  skip?: number;
}

export type GetAvailableGiftsApiResponse = ApiPurchasedGift[];

export const getAvailableGiftsApiRequest = (params: GetAvailableGiftsApiParams) => {
  return axiosInstance.post<never, GetAvailableGiftsApiResponse>('purchasedGift.getAvailable', params);
};
