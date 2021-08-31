import React from 'react';
import styled from 'styled-components';

export interface SiderContentProps {}

export const SiderContent: React.FC<SiderContentProps> = ({ children }) => {
  return <Root>{children}</Root>;
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;
