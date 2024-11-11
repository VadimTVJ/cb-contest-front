import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { type ComponentProps, forwardRef } from 'react';

import styles from './Page.module.scss';

export interface PageProps extends ComponentProps<'div'> {
  withTabbarOffset?: boolean;
  asChild?: boolean;
}

export const Page = forwardRef<HTMLDivElement, PageProps>((props, forwardedRef) => {
  const { className, withTabbarOffset, asChild, ...rest } = props;

  const rootClassName = clsx(
    styles.Page,
    {
      [styles.Page_withTabbar]: withTabbarOffset
    },
    className
  );

  const Component = asChild ? Slot : 'div';

  return (
    <Component
      ref={forwardedRef}
      className={rootClassName}
      {...rest}
    />
  );
});

Page.displayName = 'Page';
