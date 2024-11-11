import { ApiInvoice } from '../../entities';
import { axiosInstance } from '../../instance';

export type CreateInvoiceApiParams = {
  storeGiftId: number;
}

export type CreateInvoiceApiResponse = ApiInvoice;

export const createInvoiceApiRequest = (params: CreateInvoiceApiParams) => {
  return axiosInstance.post<never, CreateInvoiceApiResponse>('invoice.create', params);
};
