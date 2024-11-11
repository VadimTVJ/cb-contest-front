import { ReactNode } from 'react';

import { Page } from '../../../shared/ui';
import styles from './PageGifts.module.scss';
import { GiftsSection, HeroSection } from './ui';

export const PageGifts = (): ReactNode => {
  return (
    <Page
      className={styles.PageGifts}
      withTabbarOffset
    >
      <HeroSection />
      <GiftsSection />
    </Page>
  );
};

PageGifts.displayName = 'PageGifts';
