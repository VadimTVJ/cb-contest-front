import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import {
  Api, ApiError, GetInvoiceStatusApiParams, GetInvoiceStatusApiResponse
} from '../../../shared/services/api';
import { useIsUserInited } from '../../../shared/services/app';

type Options = UseQueryOptions<GetInvoiceStatusApiResponse, ApiError>;
type Params = {
  options?: Partial<Options>;
  params: GetInvoiceStatusApiParams;
}

export const QK_INVOICE_STATUS = 'invoice-status';

export const getInvoiceStatusQuery = ({ options, params }: Params): Options => ({
  queryKey: [QK_INVOICE_STATUS, params],
  queryFn: () => Api.invoice.getStatus(params),

  ...options
});

export const useInvoiceStatusQuery = (params: Params) => {
  const isUserInited = useIsUserInited();

  return useQuery(getInvoiceStatusQuery({
    ...params,
    options: {
      enabled: isUserInited,
      ...params.options
    }
  }));
};
