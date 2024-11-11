import { clsx } from 'clsx';
import { type ComponentProps, forwardRef } from 'react';

import styles from './ListHeader.module.scss';

export interface ListHeaderProps extends ComponentProps<'div'> {}

export const ListHeader = forwardRef<HTMLDivElement, ListHeaderProps>((props, forwardedRef) => {
  const {
    className,
    ...rest
  } = props;

  return (
    <div ref={forwardedRef} className={clsx(styles.ListHeader, className)} {...rest} />
  );
});

ListHeader.displayName = 'ListHeader';
