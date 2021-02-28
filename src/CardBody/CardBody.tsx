import React from 'react';
import styled from 'styled-components';

export interface CardBodyProps {}

export const CardBody: React.FC<CardBodyProps> = ({ children }) => {
  return <Root>{children}</Root>;
};

const Root = styled.div`
  flex-shrink: 1;
  flex-grow: 1;
  flex-basis: auto;
  padding: 12px;
`;
