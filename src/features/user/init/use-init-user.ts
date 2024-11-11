import { useSetAtomState } from '@mntm/precoil';

import { isUserInitedAtom } from '../../../shared/services/app';
import { useInitUserMutation } from './api';

export const useInitUser = () => {
  const setIsUserInited = useSetAtomState(isUserInitedAtom);

  return useInitUserMutation({
    onSuccess: () => {
      setIsUserInited(true);
    }
  });
};
