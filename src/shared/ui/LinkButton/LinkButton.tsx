import { Slot, Slottable } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { type ComponentProps, forwardRef, ReactNode } from 'react';

import { Icon12Chevron } from '../../assets/icons';
import styles from './LinkButton.module.scss';

export interface LinkButtonProps extends ComponentProps<'a'> {
  asChild?: boolean;
  iconBefore?: ReactNode;
  withChevron?: boolean;
}

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>((props, forwardedRef) => {
  const {
    className,
    asChild,
    children,
    iconBefore,
    withChevron,
    ...rest
  } = props;

  const Component = asChild ? Slot : 'a';

  return (
    <Component
      ref={forwardedRef}
      className={clsx(styles.LinkButton, className)}
      {...rest}
    >
      {iconBefore && <span className={styles.LinkButton__iconBefore}>{iconBefore}</span>}
      <Slottable>{children}</Slottable>
      {withChevron && <Icon12Chevron className={styles.LinkButton__chevron} />}
    </Component>
  );
});

LinkButton.displayName = 'LinkButton';
