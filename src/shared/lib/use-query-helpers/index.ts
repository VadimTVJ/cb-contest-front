import { InfiniteData, QueryKey, UseInfiniteQueryOptions } from '@tanstack/react-query';

import { ApiError } from '../../services/api';

export type InfiniteQueryOptions<T = unknown> = UseInfiniteQueryOptions<T, ApiError, InfiniteData<T>, T, QueryKey, number>;
