import { ReactNode } from 'react';

import styles from './TableCell.module.scss';

export interface TableCellProps {
  label: ReactNode;
  value: ReactNode
}

export const TableCell = (props: TableCellProps): ReactNode => {
  const { label, value } = props;

  return (
    <>
      <div className={styles.TableCellLabel}>{label}</div>
      <div className={styles.TableCellValue}>{value}</div>
    </>
  );
};

TableCell.displayName = 'TableCell';
