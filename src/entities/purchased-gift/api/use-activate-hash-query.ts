import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import {
  Api, ApiError, GetActivateHashApiParams, GetActivateHashApiResponse
} from '../../../shared/services/api';
import { useIsUserInited } from '../../../shared/services/app';

type Options = UseQueryOptions<GetActivateHashApiResponse, ApiError>;
type Params = {
  options?: Partial<Options>;
  params: GetActivateHashApiParams;
}

export const QK_ACTIVATE_HASH = 'activate-hash';

export const getActivateHashQuery = ({ options, params }: Params): Options => ({
  queryKey: [QK_ACTIVATE_HASH, params],
  queryFn: () => Api.purchasedGift.getActivateHash(params),

  ...options
});

export const useActivateHashQuery = (params: Params) => {
  const isUserInited = useIsUserInited();

  return useQuery(getActivateHashQuery({
    ...params,
    options: {
      enabled: isUserInited,
      ...params.options
    }
  }));
};
