import React, { Ref } from 'react';
import styled from 'styled-components';

import { LoadingSpinner } from '../LoadingSpinner';

export interface FormInputProps extends React.HTMLAttributes<HTMLInputElement> {
  className?: string;
  icon?: React.ReactNode;
  inputRef?: Ref<HTMLInputElement>;
  isFullWidth?: boolean;
  isLoading?: boolean;
  style?: React.CSSProperties;
}

export const FormInput: React.FC<FormInputProps> = ({
  className,
  icon,
  inputRef,
  isFullWidth = false,
  isLoading,
  style,
}) => {
  let iconContent: React.ReactNode;
  if (isLoading) {
    iconContent = <LoadingSpinner />;
  } else if (icon) {
    iconContent = icon;
  }

  return (
    <Root isFullWidth={isFullWidth} className={className} style={style}>
      <Input ref={inputRef} />
      {iconContent && <IconWrapper>{iconContent}</IconWrapper>}
    </Root>
  );
};

const Root = styled.div<{ isFullWidth: boolean }>`
  width: ${(props) => props.isFullWidth && '100%'};
  display: inline-flex;
  align-items: center;
  border: 1px solid ${(props) => props.theme.palette.grey.light[7]};
  border-radius: 4px;
  padding: 4px 8px;
`;

const Input = styled.input`
  outline: none;
  border: none;
`;

const IconWrapper = styled.span`
  margin-left: 3px;
  display: flex;
  align-items: center;
`;
