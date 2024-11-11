import { createInvoiceApiRequest } from './create';
import { getInvoiceStatusApiRequest } from './get-status';

export const invoiceRoutes = {
  create: createInvoiceApiRequest,
  getStatus: getInvoiceStatusApiRequest
};

export type { CreateInvoiceApiParams, CreateInvoiceApiResponse } from './create';
export type { GetInvoiceStatusApiParams, GetInvoiceStatusApiResponse } from './get-status';
