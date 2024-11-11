import '../styles/styles.scss';

import { ComponentType } from 'react';

import { ModalContainer } from '../../shared/lib/modals';
import { SnackbarContainer } from '../../shared/lib/snackbar';
import { App } from '../../shared/ui';

export const withUi = (Component: ComponentType) => () => {
  return (
    <App>
      <Component />

      <ModalContainer />
      <SnackbarContainer />
    </App>
  );
};
