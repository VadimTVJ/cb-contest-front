import { clsx } from 'clsx';
import { forwardRef } from 'react';
import Lottie from 'react-lottie-player';

import balloonsLottie from '../../../../../shared/assets/lotties/emoji-balloons.json';
import { Placeholder, PlaceholderProps } from '../../../../../shared/ui';
import styles from './EmptyHistoryPlaceholder.module.scss';
import { useMainButton } from './hooks';

export interface EmptyHistoryPlaceholderProps extends PlaceholderProps {}

export const EmptyHistoryPlaceholder = forwardRef<HTMLDivElement, EmptyHistoryPlaceholderProps>((props, forwardedRef) => {
  const { className, ...rest } = props;

  useMainButton();

  return (
    <Placeholder
      ref={forwardedRef}
      className={clsx(styles.EmptyHistoryPlaceholder, className)}
      icon={(
        <Lottie
          className={styles.EmptyHistoryPlaceholder__lottie}
          play
          loop
          animationData={balloonsLottie}
        />
      )}
      heading="History is Empty"
      subHeading="Give and receive gifts so there's something here."
      {...rest}
    />
  );
});

EmptyHistoryPlaceholder.displayName = 'EmptyHistoryPlaceholder';
