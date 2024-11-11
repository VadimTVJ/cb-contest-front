import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import {
  Api,
  ApiError, CreateInvoiceApiParams, CreateInvoiceApiResponse
} from '../../../shared/services/api';

type QueryOptions = Partial<UseMutationOptions<
  CreateInvoiceApiResponse,
  ApiError,
  CreateInvoiceApiParams
>>;

export const useCreateInvoiceMutation = (options: QueryOptions = {}) => {
  return useMutation({
    mutationFn: (params) => Api.invoice.create(params),

    ...options
  });
};
