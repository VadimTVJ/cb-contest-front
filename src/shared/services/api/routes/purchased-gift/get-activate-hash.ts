import { axiosInstance } from '../../instance';

export type GetActivateHashApiParams = {
  purchasedGiftId: number;
}

export type GetActivateHashApiResponse = {
  activateHash: string;
};

export const getActivateHashApiRequest = (params: GetActivateHashApiParams) => {
  return axiosInstance.post<never, GetActivateHashApiResponse>('purchasedGift.getActivateHash', params);
};
