import { clsx } from 'clsx';
import { type ComponentProps, forwardRef } from 'react';

import styles from './Image.module.scss';

export interface ImageProps extends ComponentProps<'img'> {
  width?: string;
}

export const Image = forwardRef<HTMLImageElement, ImageProps>((props, forwardedRef) => {
  const {
    className,
    width,
    style,
    ...rest
  } = props;

  return (
    <img
      ref={forwardedRef}
      className={clsx(styles.Image, className)}
      style={{
        width,
        ...style
      }}
      {...rest}
    />
  );
});

Image.displayName = 'Image';
