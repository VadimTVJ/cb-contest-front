import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ComponentType } from 'react';

import { queryClient } from '../../shared/config/query-client';

export const withQuery = (Component: ComponentType) => () => (
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools buttonPosition="bottom-right" />
    <Component />
  </QueryClientProvider>
);
