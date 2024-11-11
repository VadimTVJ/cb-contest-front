import { clsx } from 'clsx';
import { type ComponentProps, forwardRef } from 'react';

import { Icon30Close } from '../../assets/icons';
import styles from './Modal.module.scss';

export interface ModalProps extends ComponentProps<'div'> {
  onClose: () => void;
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>((props, forwardedRef) => {
  const {
    className,
    onClose,
    children,
    ...rest
  } = props;

  return (
    <div
      ref={forwardedRef}
      className={clsx(styles.Modal, className)}
      {...rest}
    >
      <button
        className={styles.Modal__closeButton}
        onClick={onClose}
      >
        <Icon30Close />
      </button>

      <div className={styles.Modal__in}>{children}</div>
    </div>
  );
});

Modal.displayName = 'Modal';
