import { backButton } from '@telegram-apps/sdk-react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useBackButtonHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const offClick = backButton.onClick(() => navigate(-1));

    if (location.pathname === '/store') {
      backButton.hide();
    } else {
      backButton.show();
    }

    return () => {
      offClick();
    };
  }, [navigate, location]);
};
