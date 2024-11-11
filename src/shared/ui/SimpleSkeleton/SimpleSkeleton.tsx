import { clsx } from 'clsx';
import { type ComponentProps, forwardRef } from 'react';

import styles from './SimpleSkeleton.module.scss';

export interface SimpleSkeletonProps extends ComponentProps<'div'> {}

export const SimpleSkeleton = forwardRef<HTMLDivElement, SimpleSkeletonProps>((props, forwardedRef) => {
  const {
    className,
    ...rest
  } = props;

  return (
    <div ref={forwardedRef} className={clsx(styles.SimpleSkeleton, className)} {...rest} />
  );
});

SimpleSkeleton.displayName = 'SimpleSkeleton';
