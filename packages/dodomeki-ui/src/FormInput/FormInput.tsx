import React, { Ref, useCallback, useState } from 'react';
import styled, { css } from 'styled-components';

import { LoadingSpinner } from '../LoadingSpinner';

export interface FormInputProps extends React.HTMLAttributes<HTMLInputElement> {
  className?: string;
  endIcon?: React.ReactNode;
  inputRef?: Ref<HTMLInputElement>;
  isFullWidth?: boolean;
  isLoading?: boolean;
  startIcon?: React.ReactNode;
  style?: React.CSSProperties;
}

export const FormInput: React.FC<FormInputProps> = ({
  className,
  endIcon,
  inputRef,
  isFullWidth = false,
  isLoading,
  onBlur,
  onFocus,
  startIcon,
  style,
  ...rest
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

  let endIconContent: React.ReactNode;
  if (isLoading) {
    endIconContent = <LoadingSpinner size="sm" />;
  } else if (endIcon) {
    endIconContent = endIcon;
  }

  return (
    <Root
      className={className}
      isFocused={isFocused}
      isFullWidth={isFullWidth}
      style={style}
    >
      {startIcon && <StartIconWrapper>{startIcon}</StartIconWrapper>}
      <Input
        ref={inputRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      />
      {endIconContent && <EndIconWrapper>{endIconContent}</EndIconWrapper>}
    </Root>
  );
};

const Root = styled.div<{ isFullWidth: boolean; isFocused: boolean }>`
  width: ${(props) => props.isFullWidth && '100%'};
  display: inline-flex;
  align-items: center;
  border: 1px solid ${(props) => props.theme.palette.border};
  border-radius: 4px;
  padding: 4px 8px;

  transition: background-color 0.15s;
  ${(props) =>
    props.isFocused &&
    css`
      background-color: ${props.theme.palette.grey.light[2]};
    `}
`;

const Input = styled.input`
  outline: none;
  border: none;
  transition: background-color 0.15s;
  &:focus {
    background-color: ${(props) => props.theme.palette.grey.light[2]};
  }
`;

const StartIconWrapper = styled.span`
  margin-right: 5px;
  display: flex;
  align-items: center;
`;

const EndIconWrapper = styled.span`
  margin-left: 3px;
  display: flex;
  align-items: center;
`;
