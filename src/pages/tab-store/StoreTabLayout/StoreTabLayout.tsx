import { AnimatePresence } from 'framer-motion';
import { cloneElement, ReactNode, useRef } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';

import { StoreTabMask, StoreTabMaskActionsType } from '../StoreTabMask';
import { MaskActionsContext } from './MaskActionsContext';

export const StoreTabLayout = (): ReactNode => {
  const maskActionsRef = useRef<StoreTabMaskActionsType>(null);

  const location = useLocation();
  const outlet = useOutlet();

  return (
    <>
      <StoreTabMask maskActionsRef={maskActionsRef} />

      <MaskActionsContext.Provider value={{ maskActionsRef }}>
        <AnimatePresence mode="sync" initial={false}>
          {outlet && cloneElement(outlet, { key: location.pathname })}
        </AnimatePresence>
      </MaskActionsContext.Provider>
    </>
  );
};

StoreTabLayout.displayName = 'StoreTabLayout';
