import { createContext } from 'react';

export type Scheme = 'light' | 'dark';

export interface AppContextInterface {
  scheme: Scheme;
  setScheme: (scheme: Scheme) => void;
}

export const AppContext = createContext<AppContextInterface>({
  scheme: 'light',
  setScheme: () => {}
});
