import React, { useContext } from 'react';
import styled, { css } from 'styled-components';

import { ListContext } from '../ListContext';

export interface ListItemProps {}

export const ListItem: React.FC<ListItemProps> = ({ children }) => {
  const { dense } = useContext(ListContext);
  return <Root dense={dense}>{children}</Root>;
};

const Root = styled.li<{ dense: boolean }>`
  padding-right: 8px;
  padding-left: 8px;
  ${({ dense }) => {
    const p = dense ? '3px' : '8px';
    return css`
      padding-top: ${p};
      padding-bottom: ${p};
    `;
  }}
  :not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.palette.grey.light[8]};
  }
`;
