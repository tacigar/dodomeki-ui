import React from 'react';
import styled, { css } from 'styled-components';

import { Button } from '../Button';

export interface TabProps {
  value: any;
  className?: string;
  _isSelected?: boolean;
  _onChange?: (value: any) => void;
}

export const Tab: React.FC<TabProps> = ({
  value,
  className,
  children,
  _isSelected = false,
  _onChange,
}) => {
  const handleClick = () => {
    if (_onChange) {
      _onChange(value);
    }
  };

  return (
    <Root
      onClick={handleClick}
      className={className}
      role="tab"
      tabIndex={_isSelected ? 0 : -1}
      _isSelected={_isSelected}
    >
      {children}
    </Root>
  );
};

const Root = styled(Button).attrs<{ _isSelected: boolean }>((props) => ({
  'aria-selected': props._isSelected,
}))<{ _isSelected: boolean }>`
  min-width: 100px;
  display: flex;
  position: relative;
  justify-content: center;
  border-bottom: none;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  margin-left: 12px;
  bottom: -1px;

  ${(props) => {
    if (props._isSelected) {
      return css`
        background: #fff;
        border-bottom: 1px solid #fff;
        cursor: unset;
        :hover,
        :active {
          background: #fff;
          box-shadow: none;
        }
      `;
    }
    return null;
  }}
`;
