import { clsx } from 'clsx';
import { type ComponentProps, forwardRef } from 'react';

import styles from './Table.module.scss';

export interface TableProps extends ComponentProps<'div'> {}

export const Table = forwardRef<HTMLDivElement, TableProps>((props, forwardedRef) => {
  const {
    className,
    ...rest
  } = props;

  return (
    <div ref={forwardedRef} className={clsx(styles.Table, className)} {...rest} />
  );
});

Table.displayName = 'Table';
