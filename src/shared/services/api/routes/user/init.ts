import { axiosInstance } from '../../instance';

export type InitUserApiResponse = any;

export const initUserApiRequest = () => {
  return axiosInstance.post<never, InitUserApiResponse>('user.init');
};
