import { ReactNode } from 'react';

import { Page } from '../../../shared/ui';
import styles from './PageRecentActions.module.scss';
import { FeedSection, HeroSection } from './ui';

export const PageRecentActions = (): ReactNode => {
  return (
    <Page className={styles.PageRecentActions}>
      <HeroSection />
      <FeedSection />
    </Page>
  );
};

PageRecentActions.displayName = 'PageRecentActions';
