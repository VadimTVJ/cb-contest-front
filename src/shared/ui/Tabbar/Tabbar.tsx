import { clsx } from 'clsx';
import { type ComponentProps, forwardRef } from 'react';

import styles from './Tabbar.module.scss';

export interface TabbarProps extends ComponentProps<'div'> {}

export const Tabbar = forwardRef<HTMLDivElement, TabbarProps>((props, forwardedRef) => {
  const {
    className,
    ...rest
  } = props;

  return (
    <div ref={forwardedRef} className={clsx(styles.Tabbar, className)} {...rest} />
  );
});

Tabbar.displayName = 'Tabbar';
