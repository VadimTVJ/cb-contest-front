import { motion, useWillChange } from 'framer-motion';
import { ReactNode, useRef } from 'react';

import { Page } from '../../../shared/ui';
import { animationVariants } from './animation-variants';
import styles from './PageStore.module.scss';
import { GiftsSection, HeroSection } from './ui';

export const PageStore = (): ReactNode => {
  const pageRef = useRef<HTMLDivElement>(null);

  const willChange = useWillChange();

  return (
    <Page
      ref={pageRef}
      className={styles.PageStore}
      asChild
      withTabbarOffset
    >
      <motion.div
        initial="initial"
        animate="initial"
        exit="exiting"
        variants={animationVariants}
        style={{ willChange }}
      >
        <HeroSection containerRef={pageRef} />
        <GiftsSection />
      </motion.div>
    </Page>
  );
};

PageStore.displayName = 'PageStore';
