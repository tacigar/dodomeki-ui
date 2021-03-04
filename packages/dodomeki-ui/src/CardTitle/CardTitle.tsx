import React from 'react';
import styled from 'styled-components';

export interface CardTitleProps {}

export const CardTitle: React.FC<CardTitleProps> = ({ children }) => {
  return <Root>{children}</Root>;
};

const Root = styled.div`
  font-size: ${({ theme }) => theme.text.fontSize.xl};
  font-weight: 800;
  margin-bottom: 4px;
`;
