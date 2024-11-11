import { getFeedApiRequest } from './get-all';

export const feedRoutes = {
  getAll: getFeedApiRequest
};

export type { GetFeedApiParams, GetFeedApiResponse } from './get-all';
