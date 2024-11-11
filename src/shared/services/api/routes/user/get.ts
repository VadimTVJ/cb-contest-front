import { ApiUser } from '../../entities';
import { axiosInstance } from '../../instance';

export type GetUserApiParams = {
  tgId: number;
}

export type GetUserApiResponse = ApiUser;

export const getUserApiRequest = (params: GetUserApiParams) => {
  return axiosInstance.post<never, GetUserApiResponse>('user.get', params);
};
