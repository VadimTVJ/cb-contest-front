import { clsx } from 'clsx';
import { type ComponentProps, forwardRef, ReactNode } from 'react';

import styles from './Snackbar.module.scss';

export interface SnackbarProps extends ComponentProps<'div'> {
  before?: ReactNode;
  after?: ReactNode;
  heading?: ReactNode;
  subHeading?: ReactNode;
}

export const Snackbar = forwardRef<HTMLDivElement, SnackbarProps>((props, forwardedRef) => {
  const {
    className,
    before,
    after,
    heading,
    subHeading,
    ...rest
  } = props;

  return (
    <div
      ref={forwardedRef}
      className={clsx(styles.Snackbar, className)}
      {...rest}
    >
      {!!before && <div className={styles.Snackbar__before}>{before}</div>}
      <div className={styles.Snackbar__content}>
        {!!heading && <div className={styles.Snackbar__heading}>{heading}</div>}
        {!!subHeading && <div className={styles.Snackbar__subheading}>{subHeading}</div>}
      </div>
      {!!after && <div className={styles.Snackbar__after}>{after}</div>}
    </div>
  );
});

Snackbar.displayName = 'Snackbar';
