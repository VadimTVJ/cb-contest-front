import { clsx } from 'clsx';
import { AnimationItem } from 'lottie-web';
import { type ComponentProps, forwardRef, MouseEvent, ReactNode, useRef } from 'react';
import Lottie, { LottieProps } from 'react-lottie-player';

import styles from './TabbarItem.module.scss';

export interface TabbarItemProps extends ComponentProps<'button'> {
  label?: ReactNode;
  selected?: boolean;
  lottieProps?: Partial<LottieProps>;
}

export const TabbarItem = forwardRef<HTMLButtonElement, TabbarItemProps>((props, forwardedRef) => {
  const {
    className,
    lottieProps,
    label,
    selected,
    onClick,
    ...rest
  } = props;

  const lottieRef = useRef<AnimationItem>(null);

  const rootClassName = clsx(
    styles.TabbarItem,
    {
      [styles.TabbarItem_selected]: selected
    },
    className
  );

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    lottieRef.current?.goToAndPlay(0);
    onClick?.(e);
  };

  return (
    <button
      ref={forwardedRef}
      className={rootClassName}
      onClick={handleClick}
      {...rest}
    >
      <Lottie
        ref={lottieRef}
        className={styles.TabbarItem__lottie}
        {...lottieProps}
      />

      <span className={styles.TabbarItem__label}>{label}</span>
    </button>
  );
});

TabbarItem.displayName = 'TabbarItem';
