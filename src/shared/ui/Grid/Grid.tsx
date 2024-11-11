import { clsx } from 'clsx';
import { ComponentProps, type CSSProperties, forwardRef } from 'react';

import styles from './Grid.module.scss';

export type GridDisplay = 'grid' | 'inline-grid';
export type GridAlign = 'start' | 'center' | 'end' | 'baseline' | 'stretch';
export type GridJustify = 'start' | 'center' | 'end' | 'between';

export interface GridProps extends ComponentProps<'div'> {
  display?: GridDisplay
  align?: GridAlign
  justify?: GridJustify
  gap?: string
  gapX?: string
  gapY?: string
  cols?: number
  rows?: number
}

export const Grid = forwardRef<HTMLDivElement, GridProps>((props, forwardedRef) => {
  const {
    className,
    style,
    display = 'grid',
    align = 'start',
    justify = 'start',
    gap,
    gapX,
    gapY,
    cols,
    rows,
    ...rest
  } = props;

  return (
    <div
      ref={forwardedRef}
      className={clsx(styles.Grid, className)}
      style={{
        justifyContent: justify,
        alignItems: align,
        ...style,
        display,

        '--Grid_gapX': gapX ?? gap ?? '0px',
        '--Grid_gapY': gapY ?? gap ?? '0px',
        '--Grid_cols': cols ?? 0,
        '--Grid_rows': rows ?? 0
      } as CSSProperties}
      {...rest}
    />
  );
});

Grid.displayName = 'Grid';
