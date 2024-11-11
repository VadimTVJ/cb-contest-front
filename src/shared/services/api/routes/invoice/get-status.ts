import { ApiInvoiceStatus } from '../../entities';
import { axiosInstance } from '../../instance';

export type GetInvoiceStatusApiParams = {
  invoiceId: number;
}

export type GetInvoiceStatusApiResponse = {
  status: ApiInvoiceStatus
};

export const getInvoiceStatusApiRequest = (params: GetInvoiceStatusApiParams) => {
  return axiosInstance.post<never, GetInvoiceStatusApiResponse>('invoice.getStatus', params);
};
