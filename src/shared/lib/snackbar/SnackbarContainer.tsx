import { useAtomState } from '@mntm/precoil';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode, useEffect } from 'react';

import { activeSnackbarAtom } from './atoms';
import styles from './SnackbarContainer.module.scss';

export const SnackbarContainer = (): ReactNode => {
  const [activeSnackbar, setActiveSnackbar] = useAtomState(activeSnackbarAtom);

  useEffect(() => {
    if (!activeSnackbar) return;

    const timeout = setTimeout(() => {
      setActiveSnackbar(null);
    }, 3_000);

    return () => {
      clearTimeout(timeout);
    };
  }, [activeSnackbar]);

  return (
    <AnimatePresence>
      {!!activeSnackbar && (
        <>
          <motion.div
            className={styles.SnackbarContainer}
            initial={{ y: '100%' }}
            animate={{ y: 0, transition: { duration: 0.25, ease: 'easeOut' } }}
            exit={{ y: '100%', transition: { duration: 0.25 } }}
          >
            {activeSnackbar}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
