import React from 'react';
import styled from 'styled-components';

import { Theme } from '../styles';

export interface TableRowProps
  extends React.HTMLAttributes<HTMLTableRowElement> {
  className?: string;
}

export const TableRow: React.FC<TableRowProps> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <Root {...rest} className={className}>
      {children}
    </Root>
  );
};

const Root = styled.tr<TableRowProps & { theme: Theme }>`
  :not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.palette.border};
  }
`;
