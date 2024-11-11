import { atom, useAtomValue } from '@mntm/precoil';

export const isUserInitedAtom = atom(false, 'is-user-inited');
export const useIsUserInited = () => useAtomValue(isUserInitedAtom);
