import { Slot, Slottable } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { type ComponentProps, forwardRef, ReactNode } from 'react';

import styles from './Button.module.scss';

export type ButtonSize = 'small' | 'large';

export interface ButtonProps extends ComponentProps<'button'> {
  size?: ButtonSize
  asChild?: boolean
  before?: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, forwardedRef) => {
  const {
    className,
    asChild = false,
    size = 'small',
    before,
    children,
    ...rest
  } = props;

  const Component = asChild ? Slot : 'button';

  const rootClassName = clsx(
    styles.Button,
    styles[`Button_size_${size}`],
    {
      [styles.Button_disabled]: rest.disabled
    },
    className
  );

  return (
    <Component
      ref={forwardedRef}
      className={rootClassName}
      {...rest}
    >
      {!!before && <span className={styles.Button__before}>{before}</span>}
      <Slottable>{children}</Slottable>
    </Component>
  );
});

Button.displayName = 'Button';
