import React from 'react';
import styled from 'styled-components';

export interface FieldProps {
  className?: string;
  description?: string;
  label?: string;
}

export const Field: React.FC<FieldProps> = ({
  children,
  className,
  description,
  label,
}) => {
  return (
    <Root className={className}>
      {label && (
        <LabelWrapper>
          <Label>{label}</Label>
        </LabelWrapper>
      )}
      <div>{children}</div>
      <Description>{description}</Description>
    </Root>
  );
};

const Root = styled.div`
  max-width: 400px;
`;

const LabelWrapper = styled.div`
  margin-bottom: 2px;
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.text.fontSize.sm};
  font-weight: 600;
`;

const Description = styled.div`
  margin-top: 4px;
  font-size: ${({ theme }) => theme.text.fontSize.xs};
  color: ${({ theme }) => theme.palette.grey.light[8]};
`;
