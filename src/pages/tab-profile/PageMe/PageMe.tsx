import { useLaunchParams } from '@telegram-apps/sdk-react';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { Icon16Recent } from '../../../shared/assets/icons';
import { LinkButton, Page } from '../../../shared/ui';
import { ReceivedGiftsSection } from '../../../widgets';
import styles from './PageMe.module.scss';
import { ProfileSection } from './ui';

export const PageMe = (): ReactNode => {
  const lp = useLaunchParams();

  return (
    <Page
      className={styles.PageMe}
      withTabbarOffset
    >
      <ProfileSection />

      <div className={styles.PageMe__actionsContainer}>
        <LinkButton
          iconBefore={<Icon16Recent />}
          withChevron
          asChild
        >
          <Link to="/me/recent">
            Recent Actions
          </Link>
        </LinkButton>
      </div>

      <ReceivedGiftsSection tgId={lp.initData!.user!.id} />
    </Page>
  );
};

PageMe.displayName = 'PageMe';
