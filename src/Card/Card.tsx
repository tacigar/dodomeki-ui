import React from 'react';
import styled from 'styled-components';

import { Panel } from '../Panel';

export interface CardProps {
  className?: string;
  style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({ children, className, style }) => {
  return (
    <Root className={className} style={style}>
      {children}
    </Root>
  );
};

const Root = styled(Panel)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
