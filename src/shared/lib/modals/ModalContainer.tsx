import { useAtomState } from '@mntm/precoil';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode, useEffect } from 'react';

import { activeModalAtom } from './atoms';
import styles from './ModalContainer.module.scss';

export const ModalContainer = (): ReactNode => {
  const [activeModal, setActiveModal] = useAtomState(activeModalAtom);

  useEffect(() => {
    document.body.style.overflow = activeModal
      ? 'hidden'
      : 'auto';
  }, [activeModal]);

  return (
    <AnimatePresence>
      {!!activeModal && (
        <>
          <motion.div
            className={styles.Mask}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.25 } }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
            onClick={() => setActiveModal(null)}
          />

          <motion.div
            className={styles.Modal}
            initial={{ y: '100%' }}
            animate={{ y: 0, transition: { duration: 0.25, ease: 'easeOut' } }}
            exit={{ y: '100%', transition: { duration: 0.25 } }}
          >
            {activeModal}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
