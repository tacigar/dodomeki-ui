import React from 'react';
import styled from 'styled-components';

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return <Root>{children}</Root>;
};

const Root = styled.div`
  color: #bdbdbd;
  background-color: #24292f;
  height: 100%;
  padding: 8px 24px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;
