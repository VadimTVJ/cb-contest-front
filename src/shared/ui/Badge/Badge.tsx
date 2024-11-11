import { clsx } from 'clsx';
import { type ComponentProps, forwardRef, ReactNode } from 'react';

import styles from './Badge.module.scss';

export interface BadgeProps extends ComponentProps<'div'> {
  rightBottomCorner?: ReactNode;
  rightBottomOffset?: [number, number];

  centerBottomCorner?: ReactNode;
  centerBottomOffset?: number;
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>((props, forwardedRef) => {
  const {
    className,
    rightBottomCorner,
    children,
    rightBottomOffset = [0, 0],
    centerBottomCorner,
    centerBottomOffset = 0,
    ...rest
  } = props;

  return (
    <div
      ref={forwardedRef}
      className={clsx(styles.Badge, className)}
      {...rest}
    >
      {children}

      {!!centerBottomCorner && (
        <div
          className={styles.Badge__corner}
          style={{
            bottom: centerBottomOffset ?? 0,
            left: 0,
            right: 0
          }}
        >
          {centerBottomCorner}
        </div>
      )}

      {!!rightBottomCorner && (
        <div
          className={styles.Badge__corner}
          style={{
            right: rightBottomOffset[0] ?? 0,
            bottom: rightBottomOffset[1] ?? 0
          }}
        >
          {rightBottomCorner}
        </div>
      )}
    </div>
  );
});

Badge.displayName = 'Badge';
