import { clsx } from 'clsx';
import { forwardRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import lottieGifts from '../../shared/assets/lotties/tab-gifts.json';
import lottieLeaderboard from '../../shared/assets/lotties/tab-leaderboard.json';
import lottieProfile from '../../shared/assets/lotties/tab-profile.json';
import lottieStore from '../../shared/assets/lotties/tab-store.json';
import { Tabbar, TabbarItem, TabbarItemProps, TabbarProps } from '../../shared/ui';
import styles from './AppTabbar.module.scss';

const pathesWithTabbar = [
  '/store',
  '/gifts',
  '/leaderboard',
  '/me'
];

export interface AppTabbarProps extends TabbarProps {}

export const AppTabbar = forwardRef<HTMLDivElement, AppTabbarProps>((props, forwardedRef) => {
  const { className, ...rest } = props;

  const navigate = useNavigate();
  const location = useLocation();

  const tabs: Partial<TabbarItemProps>[] = [
    {
      lottieProps: { animationData: lottieStore, loop: false },
      label: 'Store',
      onClick: () => navigate('/store'),
      selected: location.pathname.includes('store')
    },
    {
      lottieProps: { animationData: lottieGifts, loop: false },
      label: 'Gifts',
      onClick: () => navigate('/gifts'),
      selected: location.pathname.includes('gifts')
    },
    {
      lottieProps: { animationData: lottieLeaderboard, loop: false },
      label: 'Leaderboard',
      onClick: () => navigate('/leaderboard'),
      selected: location.pathname.includes('leaderboard')
    },
    {
      lottieProps: { animationData: lottieProfile, loop: false },
      label: 'Profile',
      onClick: () => navigate('/me'),
      selected: location.pathname.includes('me')
    }
  ];

  const rootClassName = clsx(
    styles.AppTabbar,
    {
      [styles.AppTabbar_hidden]: !pathesWithTabbar.includes(location.pathname)
    },
    className
  );

  return (
    <Tabbar
      ref={forwardedRef}
      className={rootClassName}
      {...rest}
    >
      {tabs.map((item, index) => (
        <TabbarItem
          key={index}
          {...item}
        />
      ))}
    </Tabbar>
  );
});

AppTabbar.displayName = 'AppTabbar';
