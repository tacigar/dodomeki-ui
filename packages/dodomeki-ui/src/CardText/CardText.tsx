import React from 'react';
import styled from 'styled-components';

export interface CardTextProps {}

export const CardText: React.FC<CardTextProps> = ({ children }) => {
  return <Root>{children}</Root>;
};

const Root = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-size: ${({ theme }) => theme.text.fontSize.sm};
`;
