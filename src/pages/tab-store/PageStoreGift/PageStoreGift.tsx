import { motion, useWillChange } from 'framer-motion';
import { ReactNode } from 'react';
import { useParams } from 'react-router-dom';

import { Page, Spacing } from '../../../shared/ui';
import { animationVariants } from './animation-variants';
import { useMainButton } from './hooks';
import styles from './PageStoreGift.module.scss';
import { PreviewSection, RecentActionsList } from './ui';

export const PageStoreGift = (): ReactNode => {
  const { storeGiftId } = useParams();
  const willChange = useWillChange();

  useMainButton(Number(storeGiftId));

  return (
    <Page
      className={styles.PageStoreGift}
      asChild
    >
      <motion.div
        initial="initial"
        animate="entering"
        exit="exiting"
        variants={animationVariants}
        style={{ willChange }}
      >
        <PreviewSection storeGiftId={Number(storeGiftId)} />
        <Spacing mode="secondary" height={12} />
        <RecentActionsList storeGiftId={Number(storeGiftId)} />
      </motion.div>
    </Page>
  );
};

PageStoreGift.displayName = 'PageStoreGift';
