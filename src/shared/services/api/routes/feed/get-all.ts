import { ApiFeedItem } from '../../entities';
import { axiosInstance } from '../../instance';

export type GetFeedApiParams = {
  take?: number;
  skip?: number;
  tgId?: number;
  storeGiftId?: number;
  actions?: ApiFeedItem['action'][];
}

export type GetFeedApiResponse = ApiFeedItem[];

export const getFeedApiRequest = (params: GetFeedApiParams) => {
  return axiosInstance.post<never, GetFeedApiResponse>('feed.getAll', params);
};
