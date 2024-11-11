import { clsx } from 'clsx';
import { type ComponentProps, forwardRef, useState } from 'react';

import styles from './Avatar.module.scss';

export interface AvatarProps extends ComponentProps<'img'> {
  size?: number
  initials?: string
}

export const Avatar = forwardRef<HTMLImageElement, AvatarProps>((props, forwardedRef) => {
  const {
    className,
    size = 40,
    initials,
    style,
    ...rest
  } = props;

  const [isError, setIsError] = useState(!rest.src || !rest.srcSet);

  if (isError) {
    return (
      <div
        className={clsx(styles.Avatar, styles.AvatarFallback, className)}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          lineHeight: `${size}px`,
          fontSize: `${size / 2.5}px`,
          ...style
        }}
      >
        {initials}
      </div>
    );
  }

  return (
    <img
      ref={forwardedRef}
      className={clsx(styles.Avatar, className)}
      onError={() => setIsError(true)}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        ...style
      }}
      {...rest}
    />
  );
});

Avatar.displayName = 'Avatar';
