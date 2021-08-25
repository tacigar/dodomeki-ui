import React from 'react';
import styled from 'styled-components';

import { Theme } from '../styles';

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  className?: string;
}

export const Table: React.FC<TableProps> = ({
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

const Root = styled.table<TableProps & { theme: Theme }>`
  width: 100%;
  border-spacing: 0;
  border-radius: 4px;
  border-collapse: collapse;
  overflow: hidden;
  font-size: ${(props) => props.theme.text.fontSize.md};
`;
