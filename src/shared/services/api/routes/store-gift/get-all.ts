import { ApiStoreGift } from '../../entities';
import { axiosInstance } from '../../instance';

export type GetStoreGiftsApiParams = {
  take?: number;
  skip?: number;
}

export type GetStoreGiftsApiResponse = ApiStoreGift[];

export const getStoreGiftsApiRequest = (params: GetStoreGiftsApiParams) => {
  return axiosInstance.post<never, GetStoreGiftsApiResponse>('storeGift.getAll', params);
};
