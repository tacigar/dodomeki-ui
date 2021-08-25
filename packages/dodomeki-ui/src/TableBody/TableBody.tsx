import React from 'react';
import {
  TableGroupContextProvider,
  TableGroupContextType,
} from '../TableGroupContext';

export interface TableBodyProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {
  className?: string;
}

const ctx: TableGroupContextType = { group: 'body' };

export const TableBody: React.FC<TableBodyProps> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <TableGroupContextProvider value={ctx}>
      <tbody {...rest} className={className}>
        {children}
      </tbody>
    </TableGroupContextProvider>
  );
};
