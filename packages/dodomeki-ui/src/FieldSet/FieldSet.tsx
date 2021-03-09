import React from 'react';
import styled from 'styled-components';

export interface FieldSetProps {
  className?: string;
  legend?: string;
}

export const FieldSet: React.FC<FieldSetProps> = ({
  children,
  className,
  legend,
}) => {
  return (
    <Root className={className}>
      <Legend>{legend}</Legend>
      {children}
    </Root>
  );
};

const Root = styled.fieldset`
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
`;

const Legend = styled.legend`
  display: block;
  width: 100%;
  padding: 0;
  margin-bottom: 8px;
  font-size: ${({ theme }) => theme.text.fontSize.xl};
  line-height: inherit;
`;
