import { ComponentProps, ReactNode } from 'react';

import { Icon14Ton, Icon14Usdt, Icon16Eth } from '../assets/icons';

// todo вынести ассеты в s3
export const assetsIconsMapping: Record<number, ReactNode> = {
  1: <Icon14Ton />,
  2: <Icon14Usdt />,
  3: <Icon16Eth />
};

export const getAssetIcon = (assetId: number, props?: ComponentProps<'svg'>) => {
  if (assetId === 1) {
    return <Icon14Ton {...props} />;
  } else if (assetId === 2) {
    return <Icon14Usdt {...props} />;
  } else if (assetId === 3) {
    return <Icon16Eth {...props} />;
  }
};
