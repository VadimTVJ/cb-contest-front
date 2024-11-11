import { useInfiniteQuery } from '@tanstack/react-query';

import { InfiniteQueryOptions } from '../../../shared/lib/use-query-helpers';
import {
  Api,
  GetUsersApiParams,
  GetUsersApiResponse
} from '../../../shared/services/api';
import { useIsUserInited } from '../../../shared/services/app';

type Options = InfiniteQueryOptions<GetUsersApiResponse>
type Params = {
  options?: Partial<Options>;
  params?: GetUsersApiParams
}

export const QK_USERS = 'users';

export const getUsersQuery = ({ options, params }: Params): Options => ({
  queryKey: [QK_USERS],
  initialPageParam: 0,

  queryFn: ({ pageParam }) => {
    const take = params?.take ?? 10;

    return Api.user.getAll({
      skip: pageParam * take,
      take
    });
  },
  getNextPageParam: () => undefined,

  ...options
});

export const useUsersQuery = (params: Params = {}) => {
  const isUserInited = useIsUserInited();

  return useInfiniteQuery(getUsersQuery({
    ...params,
    options: {
      enabled: isUserInited,
      ...params.options
    }
  }));
};
