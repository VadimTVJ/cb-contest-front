import { useInfiniteQuery } from '@tanstack/react-query';

import { InfiniteQueryOptions } from '../../../shared/lib/use-query-helpers';
import {
  Api, GetAvailableGiftsApiParams, GetAvailableGiftsApiResponse
} from '../../../shared/services/api';
import { useIsUserInited } from '../../../shared/services/app';

type Options = InfiniteQueryOptions<GetAvailableGiftsApiResponse>
type Params = {
  options?: Partial<Options>;
  params?: GetAvailableGiftsApiParams
}

export const QK_AVAILABLE_GIFTS = 'available-gifts';

export const getAvailableGiftsQuery = ({ options, params }: Params): Options => ({
  queryKey: [QK_AVAILABLE_GIFTS],
  initialPageParam: 0,

  queryFn: ({ pageParam }) => {
    const take = params?.take ?? 10;

    return Api.purchasedGift.getAvailable({
      skip: pageParam * take,
      take
    });
  },
  getNextPageParam: () => undefined,

  ...options
});

export const useAvailableGiftsQuery = (params: Params = {}) => {
  const isUserInited = useIsUserInited();

  return useInfiniteQuery(getAvailableGiftsQuery({
    ...params,
    options: {
      enabled: isUserInited,
      ...params.options
    }
  }));
};
