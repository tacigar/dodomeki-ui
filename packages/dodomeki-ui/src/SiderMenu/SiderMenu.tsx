import React from 'react';
import styled from 'styled-components';

export interface SiderMenuProps {}

export const SiderMenu: React.FC<SiderMenuProps> = ({ children }) => {
  return <Root>{children}</Root>;
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;
