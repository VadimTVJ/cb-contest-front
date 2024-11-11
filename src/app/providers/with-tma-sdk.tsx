import {
  backButton,
  init as initSDK,
  mainButton,
  miniApp,
  secondaryButton,
  themeParams, viewport
} from '@telegram-apps/sdk-react';
import { ComponentType } from 'react';

export const withTmaSdk = (Component: ComponentType) => () => {
  initSDK();

  miniApp.mount();
  themeParams.mount();
  backButton.mount();
  mainButton.mount();
  secondaryButton.mount();
  viewport.mount();

  viewport.expand();

  return <Component />;
};
