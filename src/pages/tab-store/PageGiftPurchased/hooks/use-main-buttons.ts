import { mainButton, secondaryButton } from '@telegram-apps/sdk-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useMainButtons = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const sendGift = () => navigate('/gifts');
    const goStore = () => navigate('/store');

    const offClickMain = mainButton.onClick(sendGift);
    mainButton.setParams({
      text: 'Send Gift',
      isVisible: true,
      isEnabled: true
    });

    const offClickSecondary = secondaryButton.onClick(goStore);
    secondaryButton.setParams({
      text: 'Open Store',
      isVisible: true,
      isEnabled: true,
      position: 'bottom'
    });

    return () => {
      offClickMain();
      offClickSecondary();

      mainButton.setParams({ isVisible: false });
      secondaryButton.setParams({ isVisible: false });
    };
  }, []);
};
