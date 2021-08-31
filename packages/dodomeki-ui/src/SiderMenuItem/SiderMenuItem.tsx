import React from 'react';
import styled, { css } from 'styled-components';

export interface SiderMenuItemProps {
  text: string;
  isSelected?: boolean;
}

export const SiderMenuItem: React.FC<SiderMenuItemProps> = ({
  text,
  isSelected = false,
}) => {
  return (
    <Root isSelected={isSelected}>
      <Text>{text}</Text>
      {isSelected && (
        <Indicator>
          <svg width="10px" height="10px">
            <path d="M10 0 L0 5 L10 10 Z" fill="#ababab" />
          </svg>
        </Indicator>
      )}
    </Root>
  );
};

const Root = styled.a<{ isSelected: boolean }>`
  padding-left: 12px;
  padding-top: 6px;
  padding-bottom: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  ${({ isSelected, theme }) =>
    isSelected
      ? css`
          cursor: default;
        `
      : css`
          &:hover {
            background-color: ${theme.palette.grey.light[2]};
          }
          &:active {
            background-color: ${theme.palette.grey.light[3]};
          }
        `}
`;

const Text = styled.span``;

const Indicator = styled.span`
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  width: 20px;
  height: 20px;
  margin-right: -1px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => css`
    background-color: ${theme.palette.white};
    border-top: 1px solid ${theme.palette.border};
    border-bottom: 1px solid ${theme.palette.border};
    border-left: 1px solid ${theme.palette.border};
  `}
`;
