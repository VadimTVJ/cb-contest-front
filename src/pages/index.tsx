import { useEffect } from 'react';
import { createMemoryRouter, Navigate, RouterProvider } from 'react-router-dom';

import { useInitUser } from '../features/user/init';
import { AppLayout } from './AppLayout';
import { PageGifts } from './tab-gifts';
import { PageLeaderboard, PageProfile } from './tab-leaderboard';
import { PageMe, PageRecentActions } from './tab-profile';
import { PageGiftPurchased, PageStore, PageStoreGift, StoreTabLayout } from './tab-store';

export const Routes = () => {
  const { mutate: initUser } = useInitUser();

  useEffect(() => {
    initUser();
  }, []);

  const router = createMemoryRouter([
    {
      path: '/',
      element: (
        <AppLayout />
      ),
      children: [
        {
          path: '',
          element: <Navigate to="/store" replace />
        },

        // Store tab
        {
          path: '/store',
          element: <StoreTabLayout />,
          children: [
            {
              path: '',
              element: <PageStore />
            },
            {
              path: 'gift/:storeGiftId',
              children: [
                {
                  path: '',
                  element: <PageStoreGift />
                },
                {
                  path: 'purchased',
                  element: <PageGiftPurchased />
                }
              ]
            },
            {
              path: '*',
              element: <Navigate to="/store" replace />
            }
          ]
        },

        // Leaderboard
        {
          path: '/leaderboard',
          element: <PageLeaderboard />
        },

        // Gifts
        {
          path: '/gifts',
          element: <PageGifts />
        },

        // Profiles
        {
          path: '/profile/:tgId',
          element: <PageProfile />
        },

        // Me
        {
          path: '/me',
          children: [
            {
              path: '',
              element: <PageMe />
            },
            {
              path: 'recent',
              element: <PageRecentActions />
            }
          ]
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};
