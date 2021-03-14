import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';

const height = 20;

export interface FormSwitchProps {
  checked?: boolean;
  onChange?: (newChecked: boolean) => void;
}

export const FormSwitch: React.FC<FormSwitchProps> = ({
  checked = false,
  onChange,
}) => {
  const handleClick = useCallback(() => {
    if (onChange) {
      onChange(!checked);
    }
  }, [checked, onChange]);

  return (
    <Root checked={checked} onClick={handleClick}>
      <Handle checked={checked} />
    </Root>
  );
};

const Root = styled.span<{ checked: boolean }>`
  height: ${height}px;
  min-width: ${height * 2}px;
  display: inline-flex;
  border-radius: 100px;
  position: relative;
  cursor: pointer;
  ${({ checked, theme }) => {
    if (!checked) {
      return css`
        background-color: ${theme.palette.grey.light[8]};
      `;
    }
    return css`
      background-color: ${theme.palette.primary[3]}};
    `;
  }};
  transition: background-color 300ms;
`;

const Handle = styled.span<{ checked: boolean }>`
  height: ${height}px;
  width: ${height}px;
  position: absolute;
  display: inline-block;
  border-radius: 50%;
  ${({ checked, theme }) => {
    if (!checked) {
      return css`
        border: 1px solid ${theme.palette.grey.light[8]};
        left: 0;
      `;
    }
    return css`
      border: 1px solid ${theme.palette.primary[3]};
      left: 100%;
      transform: translateX(-100%);
    `;
  }}
  background-color: ${({ theme }) => theme.palette.white};
  box-sizing: border-box;
  transition: all 300ms ease;
`;
