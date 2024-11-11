import { clsx } from 'clsx';
import { forwardRef } from 'react';
import Lottie from 'react-lottie-player';
import { Link } from 'react-router-dom';

import balloonsLottie from '../../../../../shared/assets/lotties/emoji-balloons.json';
import { LinkButton, Placeholder, PlaceholderProps } from '../../../../../shared/ui';
import styles from './NoGiftsPlaceholder.module.scss';

export interface NoGiftsPlaceholderProps extends PlaceholderProps {}

export const NoGiftsPlaceholder = forwardRef<HTMLDivElement, NoGiftsPlaceholderProps>((props, forwardedRef) => {
  const { className, ...rest } = props;

  return (
    <Placeholder
      ref={forwardedRef}
      className={clsx(styles.NoGiftsPlaceholder, className)}
      icon={(
        <Lottie
          className={styles.NoGiftsPlaceholder__lottie}
          play
          loop
          animationData={balloonsLottie}
        />
      )}
      subHeading="You don't have any gifts yet."
      actions={(
        <LinkButton asChild>
          <Link to="/store">
            Open Store
          </Link>
        </LinkButton>
      )}
      {...rest}
    />
  );
});

NoGiftsPlaceholder.displayName = 'NoGiftsPlaceholder';
