import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { type ComponentProps, forwardRef, ReactNode } from 'react';

import styles from './Cell.module.scss';

export interface CellProps extends ComponentProps<'div'> {
  before?: ReactNode;
  after?: ReactNode;
  heading?: ReactNode;
  subHeading?: ReactNode;
  supHeading?: ReactNode;
  asChild?: boolean;
}

export const Cell = forwardRef<HTMLDivElement, CellProps>((props, forwardedRef) => {
  const {
    className,
    before,
    after,
    heading,
    subHeading,
    supHeading,
    asChild,
    ...rest
  } = props;

  const Component = asChild ? Slot : 'div';

  return (
    <Component
      ref={forwardedRef}
      className={clsx(styles.Cell, className)}
      {...rest}
    >
      {!!before && <div className={styles.Cell__before}>{before}</div>}
      <div className={styles.Cell__body}>
        <div className={styles.Cell__content}>
          {!!supHeading && <div className={styles.Cell__supheading}>{supHeading}</div>}
          {!!heading && <div className={styles.Cell__heading}>{heading}</div>}
          {!!subHeading && <div className={styles.Cell__subheading}>{subHeading}</div>}
        </div>
        {!!after && <div className={styles.Cell__after}>{after}</div>}
      </div>
    </Component>
  );
});

Cell.displayName = 'Cell';
