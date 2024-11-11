import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import { AppTabbar } from '../AppTabbar';
import styles from './AppLayout.module.scss';
import { useBackButtonHandler } from './hooks';

export const AppLayout = (): ReactNode => {
  useBackButtonHandler();

  return (
    <div className={styles.AppLayout}>
      <Outlet />

      <AppTabbar />
    </div>
  );
};

AppLayout.displayName = 'AppLayout';
