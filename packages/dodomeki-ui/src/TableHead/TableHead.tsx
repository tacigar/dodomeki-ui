import React from 'react';
import {
  TableGroupContextProvider,
  TableGroupContextType,
} from '../TableGroupContext';

export interface TableHeadProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {
  className?: string;
}

const ctx: TableGroupContextType = { group: 'head' };

export const TableHead: React.FC<TableHeadProps> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <TableGroupContextProvider value={ctx}>
      <thead {...rest} className={className}>
        {children}
      </thead>
    </TableGroupContextProvider>
  );
};
