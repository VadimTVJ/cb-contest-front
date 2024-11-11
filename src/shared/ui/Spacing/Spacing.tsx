import { clsx } from 'clsx';
import { type ComponentProps, forwardRef } from 'react';

import styles from './Spacing.module.scss';

export interface SpacingProps extends ComponentProps<'div'> {
  mode?: 'primary' | 'secondary';
  height?: number;
}

export const Spacing = forwardRef<HTMLDivElement, SpacingProps>((props, forwardedRef) => {
  const {
    className,
    mode = 'primary',
    height = 16,
    style,
    ...rest
  } = props;

  const rootClassName = clsx(
    styles.Spacing,
    styles[`Spacing_mode_${mode}`],
    className
  );

  return (
    <div
      ref={forwardedRef}
      className={rootClassName}
      style={{
        ...style,
        height: height ? `${height}px` : undefined
      }}
      {...rest}
    />
  );
});

Spacing.displayName = 'Spacing';
