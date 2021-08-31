import React from 'react';
import styled from 'styled-components';

export interface SiderProps {}

export const Sider: React.FC<SiderProps> = ({ children }) => {
  return <Root>{children}</Root>;
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;
