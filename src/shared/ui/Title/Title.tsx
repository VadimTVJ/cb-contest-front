import { clsx } from 'clsx';
import { type ComponentProps, ElementType, forwardRef } from 'react';

import styles from './Title.module.scss';

export interface TitleProps extends ComponentProps<'div'> {
  level?: 1 | 2
  as?: ElementType
}

export const Title = forwardRef<HTMLDivElement, TitleProps>((props, forwardedRef) => {
  const {
    className,
    level = 1,
    as: Component = 'span',
    ...rest
  } = props;

  const rootClassName = clsx(
    styles.Title,
    styles[`Title_level_${level}`],
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

Title.displayName = 'Title';
