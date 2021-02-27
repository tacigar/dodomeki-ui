import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';

import { ListContext } from '../ListContext';

export interface ListProps {
  dense?: boolean;
}

export const List: React.FC<ListProps> = ({ children, dense = false }) => {
  const context = useMemo(() => ({ dense }), [dense]);

  return (
    <ListContext.Provider value={context}>
      <Root dense={dense}>{children}</Root>
    </ListContext.Provider>
  );
};

const Root = styled.ul<{ dense: boolean }>`
  list-style: none;
  padding-left: 8px;
  padding-right: 8px;
  ${({ dense }) => {
    const p = dense ? '2px' : '6px';
    return css`
      padding-top: ${p};
      padding-bottom: ${p};
    `;
  }}
`;
