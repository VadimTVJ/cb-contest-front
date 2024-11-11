import { clsx } from 'clsx';
import { type ComponentProps, forwardRef, ReactNode } from 'react';

import styles from './Placeholder.module.scss';

export interface PlaceholderProps extends ComponentProps<'div'> {
  heading?: ReactNode;
  subHeading?: ReactNode;
  icon?: ReactNode;
  actions?: ReactNode
}

export const Placeholder = forwardRef<HTMLDivElement, PlaceholderProps>((props, forwardedRef) => {
  const {
    className,
    heading,
    subHeading,
    icon,
    actions,
    ...rest
  } = props;

  return (
    <div
      ref={forwardedRef}
      className={clsx(styles.Placeholder, className)}
      {...rest}
    >
      {!!icon && <div className={styles.Placeholder__icon}>{icon}</div>}
      {!!heading && <div className={styles.Placeholder__heading}>{heading}</div>}
      {!!subHeading && <div className={styles.Placeholder__subheading}>{subHeading}</div>}
      {!!actions && <div className={styles.Placeholder__actions}>{actions}</div>}
    </div>
  );
});

Placeholder.displayName = 'Placeholder';
