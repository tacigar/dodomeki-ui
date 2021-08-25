import React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../styles';
import { useTableGroupContext } from '../TableGroupContext';

export interface TableCellProps
  extends React.TdHTMLAttributes<HTMLTableCellElement> {
  className?: string;
}

export const TableCell: React.FC<TableCellProps> = ({
  className,
  align = 'left',
  children,
  ...rest
}) => {
  const { group } = useTableGroupContext();

  if (group === 'head') {
    return (
      <Th {...rest} align={align} className={className}>
        {children}
      </Th>
    );
  }
  return (
    <Td {...rest} align={align} className={className}>
      {children}
    </Td>
  );
};

const commonStyles = (props: TableCellProps & { theme: Theme }) => {
  return css`
    text-align: ${props.align};
    padding: 4px 6px;
  `;
};

const Th = styled.th<TableCellProps & { theme: Theme }>`
  background: ${(props) => props.theme.palette.metallicGray.main};
  font-weight: 600;
  :not(:last-child) {
    border-right: 1px solid ${(props) => props.theme.palette.border};
  }
  ${(props) => {
    if (props.onClick) {
      return css`
        cursor: pointer;
        :hover {
          background: ${props.theme.palette.metallicGray.hover};
        }
        :active {
          background: ${props.theme.palette.metallicGray.active};
          box-shadow: ${props.theme.shadows.metallicGrayInset};
        }
      `;
    }
    return null;
  }}
  ${(props) => commonStyles(props)};
`;

const Td = styled.td<TableCellProps & { theme: Theme }>`
  ${(props) => commonStyles(props)};
`;
