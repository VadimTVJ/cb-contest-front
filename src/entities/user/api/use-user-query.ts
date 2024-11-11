import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import {
  Api, ApiError, GetUserApiParams, GetUserApiResponse
} from '../../../shared/services/api';
import { useIsUserInited } from '../../../shared/services/app';

type Options = UseQueryOptions<GetUserApiResponse, ApiError>;
type Params = {
  options?: Partial<Options>;
  params: GetUserApiParams;
}

export const QK_USER = 'user';

export const getUserQuery = ({ options, params }: Params): Options => ({
  queryKey: [QK_USER, params],
  queryFn: () => Api.user.get(params),

  ...options
});

export const useUserQuery = (params: Params) => {
  const isUserInited = useIsUserInited();

  return useQuery(getUserQuery({
    ...params,
    options: {
      enabled: isUserInited,
      ...params.options
    }
  }));
};
