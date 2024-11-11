import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import {
  Api, ApiError, GetStoreGiftApiParams,
  GetStoreGiftApiResponse
} from '../../../shared/services/api';
import { useIsUserInited } from '../../../shared/services/app';

type Options = UseQueryOptions<GetStoreGiftApiResponse, ApiError>;
type Params = {
  options?: Partial<Options>;
  params: GetStoreGiftApiParams;
}

export const QK_STORE_GIFT = 'store-gift';

export const getStoreGiftQuery = ({ options, params }: Params): Options => ({
  queryKey: [QK_STORE_GIFT, params],
  queryFn: () => Api.storeGift.get(params),

  ...options
});

export const useStoreGiftQuery = (params: Params) => {
  const isUserInited = useIsUserInited();

  return useQuery(getStoreGiftQuery({
    ...params,
    options: {
      enabled: isUserInited,
      ...params.options
    }
  }));
};
