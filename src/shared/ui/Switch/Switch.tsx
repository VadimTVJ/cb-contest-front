import { clsx } from 'clsx';
import { type ComponentProps, forwardRef, ReactNode } from 'react';

import styles from './Switch.module.scss';

export type SwitchOption = {
  icon: ReactNode;
  value: string;
}

export interface SwitchProps extends Omit<ComponentProps<'div'>, 'onChange'> {
  options: [SwitchOption, SwitchOption];
  value: string;
  onChange: (value: string) => void
}

export const Switch = forwardRef<HTMLDivElement, SwitchProps>((props, forwardedRef) => {
  const {
    className,
    options,
    value,
    onChange,
    ...rest
  } = props;

  const rootClassName = clsx(
    styles.Switch,
    {
      [styles.Switch_checked]: value === options[1].value
    },
    className
  );

  return (
    <div
      ref={forwardedRef}
      className={rootClassName}
      {...rest}
    >
      <span className={styles.Switch__mask} />
      {options.map(({ icon, value }) => (
        <div
          key={value}
          className={styles.Switch__item}
          onClick={() => onChange(value)}
        >
          {icon}
        </div>
      ))}
    </div>
  );
});

Switch.displayName = 'Switch';
