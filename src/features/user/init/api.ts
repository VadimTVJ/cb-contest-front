import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { Api, ApiError, InitUserApiResponse } from '../../../shared/services/api';

type QueryOptions = Partial<UseMutationOptions<
  InitUserApiResponse,
  ApiError
>>;

export const useInitUserMutation = (options: QueryOptions = {}) => {
  return useMutation({
    mutationFn: () => Api.user.init(),

    ...options
  });
};
