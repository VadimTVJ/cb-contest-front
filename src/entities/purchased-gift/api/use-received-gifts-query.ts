import { useInfiniteQuery } from '@tanstack/react-query';

import { InfiniteQueryOptions } from '../../../shared/lib/use-query-helpers';
import {
  Api, GetReceivedGiftsApiParams, GetReceivedGiftsApiResponse
} from '../../../shared/services/api';
import { useIsUserInited } from '../../../shared/services/app';

type Options = InfiniteQueryOptions<GetReceivedGiftsApiResponse>
type Params = {
  options?: Partial<Options>;
  params: GetReceivedGiftsApiParams
}

export const QK_RECEIVED_GIFTS = 'received-gifts';

export const getReceivedGiftsQuery = ({ options, params }: Params): Options => ({
  queryKey: [QK_RECEIVED_GIFTS, { tgId: params.tgId }],
  initialPageParam: 0,

  queryFn: ({ pageParam }) => {
    const take = params?.take ?? 10;

    return Api.purchasedGift.getReceived({
      ...params,
      skip: pageParam * take,
      take
    });
  },
  getNextPageParam: () => undefined,

  ...options
});

export const useReceivedGiftsQuery = (params: Params) => {
  const isUserInited = useIsUserInited();

  return useInfiniteQuery(getReceivedGiftsQuery({
    ...params,
    options: {
      enabled: isUserInited,
      ...params.options
    }
  }));
};
