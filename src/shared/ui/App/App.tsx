import { miniApp, retrieveLaunchParams } from '@telegram-apps/sdk-react';
import { clsx } from 'clsx';
import { ReactNode, useState } from 'react';

import styles from './App.module.scss';
import { AppContext, Scheme } from './context';

export interface AppProps {
  children: ReactNode
}

export const App = ({ children }: AppProps): ReactNode => {
  const [scheme, setScheme] = useState<Scheme>(miniApp.isDark() ? 'dark' : 'light');

  console.log(retrieveLaunchParams());

  const rootClassName = clsx(
    styles.App,
    styles[`App_scheme_${scheme}`]
  );

  return (
    <AppContext.Provider value={{ scheme, setScheme }}>
      <div className={rootClassName}>
        {children}
      </div>
    </AppContext.Provider>
  );
};

App.displayName = 'App';
