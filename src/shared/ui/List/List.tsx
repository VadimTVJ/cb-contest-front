import { clsx } from 'clsx';
import { type ComponentProps, forwardRef, ReactNode } from 'react';

import styles from './List.module.scss';

export interface ListProps extends ComponentProps<'div'> {
  header?: ReactNode;
}

export const List = forwardRef<HTMLDivElement, ListProps>((props, forwardedRef) => {
  const {
    className,
    header,
    children,
    ...rest
  } = props;

  return (
    <div
      ref={forwardedRef}
      className={clsx(styles.List, className)}
      {...rest}
    >
      {header && <div className={styles.List__header}>{header}</div>}
      <div className={styles.List__content}>{children}</div>
    </div>
  );
});

List.displayName = 'List';
