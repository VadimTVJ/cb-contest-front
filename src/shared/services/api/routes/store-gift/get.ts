import { ApiStoreGift } from '../../entities';
import { axiosInstance } from '../../instance';

export type GetStoreGiftApiParams = {
  storeGiftId: number;
}

export type GetStoreGiftApiResponse = ApiStoreGift;

export const getStoreGiftApiRequest = (params: GetStoreGiftApiParams) => {
  return axiosInstance.post<never, GetStoreGiftApiResponse>('storeGift.get', params);
};
