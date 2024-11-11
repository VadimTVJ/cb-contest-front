import { mainButton } from '@telegram-apps/sdk-react';
import { useEffect } from 'react';

import { useSetModal } from '../../../shared/lib/modals';

export const useMainButton = () => {
  const setModal = useSetModal();

  useEffect(() => {
    const createInvoice = () => setModal(null);

    const offClick = mainButton.onClick(createInvoice);
    mainButton.setParams({
      text: 'Close',
      isVisible: true,
      isEnabled: true
    });

    return () => {
      offClick();
      mainButton.setParams({
        isVisible: false
      });
    };
  }, []);
};
