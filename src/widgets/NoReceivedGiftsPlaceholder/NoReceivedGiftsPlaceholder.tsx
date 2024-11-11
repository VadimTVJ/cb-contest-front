import { clsx } from 'clsx';
import { forwardRef } from 'react';
import Lottie from 'react-lottie-player';
import { Link } from 'react-router-dom';

import balloonsLottie from '../../shared/assets/lotties/emoji-balloons.json';
import { LinkButton, Placeholder, PlaceholderProps } from '../../shared/ui';
import styles from './NoReceivedGiftsPlaceholder.module.scss';

export interface NoReceivedGiftsPlaceholderProps extends PlaceholderProps {}

export const NoReceivedGiftsPlaceholder = forwardRef<HTMLDivElement, NoReceivedGiftsPlaceholderProps>((props, forwardedRef) => {
  const {
    className,
    ...rest
  } = props;

  return (
    <Placeholder
      ref={forwardedRef}
      className={clsx(styles.NoReceivedGiftsPlaceholder, className)}
      icon={(
        <Lottie
          className={styles.NoReceivedGiftsPlaceholder__lottie}
          play
          loop
          animationData={balloonsLottie}
        />
      )}
      subHeading="You can buy a gift to receive a gift in return."
      actions={(
        <LinkButton asChild>
          <Link to="/store">Open Store</Link>
        </LinkButton>
      )}
      {...rest}
    />
  );
});

NoReceivedGiftsPlaceholder.displayName = 'NoReceivedGiftsPlaceholder';
