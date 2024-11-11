import { clsx } from 'clsx';
import { type ComponentProps, ElementType, forwardRef } from 'react';

import styles from './Text.module.scss';

export type TextVariant = 'regular' | 'bold';

export interface TextProps extends ComponentProps<'div'> {
  variant?: TextVariant
  as?: ElementType
}

export const Text = forwardRef<HTMLDivElement, TextProps>((props, forwardedRef) => {
  const {
    className,
    variant = 'regular',
    as: Component = 'span',
    ...rest
  } = props;

  const rootClassName = clsx(
    styles.Text,
    styles[`Title_variant_${variant}`],
    className
  );

  return (
    <Component
      ref={forwardedRef}
      className={rootClassName}
      {...rest}
    />
  );
});

Text.displayName = 'Text';
