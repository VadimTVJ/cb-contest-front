import { atom, useSetAtomState } from '@mntm/precoil';
import { ReactNode } from 'react';

export const activeModalAtom = atom<ReactNode>(null, 'active-modal');

export const useSetModal = () => useSetAtomState(activeModalAtom);
