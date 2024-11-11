import { ApiPurchasedGift } from '../../entities';
import { axiosInstance } from '../../instance';

export type GetReceivedGiftsApiParams = {
  tgId: number;
  take?: number;
  skip?: number;
}

export type GetReceivedGiftsApiResponse = ApiPurchasedGift[];

export const getReceivedGiftsApiRequest = (params: GetReceivedGiftsApiParams) => {
  return axiosInstance.post<never, GetReceivedGiftsApiResponse>('purchasedGift.getReceived', params);
};
