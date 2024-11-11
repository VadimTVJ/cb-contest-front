import { getUserApiRequest } from './get';
import { getUsersApiRequest } from './get-all';
import { initUserApiRequest } from './init';

export const userRoutes = {
  init: initUserApiRequest,
  getAll: getUsersApiRequest,
  get: getUserApiRequest
};

export type { GetUserApiParams, GetUserApiResponse } from './get';
export type { GetUsersApiParams, GetUsersApiResponse } from './get-all';
export type { InitUserApiResponse } from './init';
