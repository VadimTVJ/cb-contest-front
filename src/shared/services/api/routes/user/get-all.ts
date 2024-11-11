import { ApiUser } from '../../entities';
import { axiosInstance } from '../../instance';

export type GetUsersApiParams = {
  take?: number;
  skip?: number;
}

export type GetUsersApiResponse = ApiUser[];

export const getUsersApiRequest = (params: GetUsersApiParams) => {
  return axiosInstance.post<never, GetUsersApiResponse>('user.getAll', params);
};
