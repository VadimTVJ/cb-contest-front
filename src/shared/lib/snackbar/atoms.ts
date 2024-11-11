import { atom, useSetAtomState } from '@mntm/precoil';
import { ReactNode } from 'react';

export const activeSnackbarAtom = atom<ReactNode>(null, 'active-snackbar');

export const useSetSnackbar = () => useSetAtomState(activeSnackbarAtom);
