import { ReactNode } from 'react';
import { useParams } from 'react-router-dom';

import { Page } from '../../../shared/ui';
import { ReceivedGiftsSection } from '../../../widgets';
import styles from './PageProfile.module.scss';
import { ProfileSection } from './ui';

export const PageProfile = (): ReactNode => {
  const { tgId } = useParams();

  return (
    <Page className={styles.PageProfile}>
      <ProfileSection tgId={Number(tgId)} />
      <ReceivedGiftsSection tgId={Number(tgId)} />
    </Page>
  );
};

PageProfile.displayName = 'PageProfile';
