import { useInfiniteQuery } from '@tanstack/react-query';

import { InfiniteQueryOptions } from '../../../shared/lib/use-query-helpers';
import {
  Api,
  GetFeedApiParams,
  GetFeedApiResponse
} from '../../../shared/services/api';
import { useIsUserInited } from '../../../shared/services/app';

type Options = InfiniteQueryOptions<GetFeedApiResponse>
type Params = {
  options?: Partial<Options>;
  params: GetFeedApiParams
}

export const QK_FEED = 'feed';

export const getFeedQuery = ({ options, params: { tgId, storeGiftId, actions, ...params } }: Params): Options => ({
  queryKey: [QK_FEED, { tgId, storeGiftId, actions }],
  initialPageParam: 0,

  queryFn: ({ pageParam }) => {
    const take = params?.take ?? 10;

    return Api.feed.getAll({
      tgId,
      storeGiftId,
      actions,
      skip: pageParam * take,
      take
    });
  },
  getNextPageParam: () => undefined,

  ...options
});

export const useFeedQuery = (params: Params = { params: {} }) => {
  const isUserInited = useIsUserInited();

  return useInfiniteQuery(getFeedQuery({
    ...params,
    options: {
      enabled: isUserInited,
      ...params.options
    }
  }));
};
