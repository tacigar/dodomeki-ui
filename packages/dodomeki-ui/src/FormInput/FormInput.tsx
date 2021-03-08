import React, { Ref, useCallback, useState } from 'react';
import styled, { css } from 'styled-components';

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
  onBlur,
  onFocus,
  style,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      if (onFocus) {
        onFocus(event);
      }
    },
    [onFocus],
  );

  const handleBlur = useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      if (onBlur) {
        onBlur(event);
      }
    },
    [onBlur],
  );

  let iconContent: React.ReactNode;
  if (isLoading) {
    iconContent = <LoadingSpinner />;
  } else if (icon) {
    iconContent = icon;
  }

  return (
    <Root
      className={className}
      isFocused={isFocused}
      isFullWidth={isFullWidth}
      style={style}
    >
      <Input ref={inputRef} onFocus={handleFocus} onBlur={handleBlur} />
      {iconContent && <IconWrapper>{iconContent}</IconWrapper>}
    </Root>
  );
};

const Root = styled.div<{ isFullWidth: boolean; isFocused: boolean }>`
  width: ${(props) => props.isFullWidth && '100%'};
  display: inline-flex;
  align-items: center;
  border: 1px solid ${(props) => props.theme.palette.grey.light[7]};
  border-radius: 4px;
  padding: 4px 8px;

  transition: background-color 0.5s;
  ${(props) =>
    props.isFocused &&
    css`
      background-color: ${props.theme.palette.primary[0]};
    `}
`;

const Input = styled.input`
  outline: none;
  border: none;
  transition: background-color 0.5s;
  &:focus {
    background-color: ${(props) => props.theme.palette.primary[0]};
  }
`;

const IconWrapper = styled.span`
  margin-left: 3px;
  display: flex;
  align-items: center;
`;
