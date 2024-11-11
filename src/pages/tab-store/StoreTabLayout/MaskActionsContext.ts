import { createContext, createRef, RefObject, useContext } from 'react';

import { StoreTabMaskActionsType } from '../StoreTabMask';

interface MaskActionsContextInterface {
  maskActionsRef: RefObject<StoreTabMaskActionsType>;
}

export const MaskActionsContext = createContext<MaskActionsContextInterface>({
  maskActionsRef: createRef()
});

export const useMaskActions = () => useContext(MaskActionsContext);
