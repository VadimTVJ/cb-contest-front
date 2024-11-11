import { ReactNode } from 'react';

import { Page } from '../../../shared/ui';
import styles from './PageLeaderboard.module.scss';
import { LeaderboardSection } from './ui';

export const PageLeaderboard = (): ReactNode => {
  return (
    <Page
      className={styles.PageLeaderboard}
      withTabbarOffset
    >
      <LeaderboardSection />
    </Page>
  );
};

PageLeaderboard.displayName = 'PageLeaderboard';
