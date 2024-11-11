import { mainButton } from '@telegram-apps/sdk-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useMainButton = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const goStore = () => navigate('/store');

    const offClick = mainButton.onClick(goStore);
    mainButton.setParams({
      text: 'Open Store',
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
