import { useInfiniteQuery } from '@tanstack/react-query';

import { InfiniteQueryOptions } from '../../../shared/lib/use-query-helpers';
import { Api, GetStoreGiftsApiParams, GetStoreGiftsApiResponse } from '../../../shared/services/api';
import { useIsUserInited } from '../../../shared/services/app';

type Options = InfiniteQueryOptions<GetStoreGiftsApiResponse>
type Params = {
  options?: Partial<Options>;
  params?: GetStoreGiftsApiParams
}

export const QK_STORE_GIFTS = 'store-gifts';

export const getStoreGiftsQuery = ({ options, params }: Params): Options => ({
  queryKey: [QK_STORE_GIFTS],
  initialPageParam: 0,

  queryFn: ({ pageParam }) => {
    const take = params?.take ?? 10;

    return Api.storeGift.getAll({
      skip: pageParam * take,
      take
    });
  },
  getNextPageParam: () => undefined,

  ...options
});

export const useStoreGiftsQuery = (params: Params = {}) => {
  const isUserInited = useIsUserInited();

  return useInfiniteQuery(getStoreGiftsQuery({
    ...params,
    options: {
      enabled: isUserInited,
      ...params.options
    }
  }));
};
