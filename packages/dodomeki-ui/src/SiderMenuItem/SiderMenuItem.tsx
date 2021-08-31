import React from 'react';
import styled, { css } from 'styled-components';

export interface SiderMenuItemProps {
  text: string;
  icon?: React.ReactNode;
  isSelected?: boolean;
}

export const SiderMenuItem: React.FC<SiderMenuItemProps> = ({
  text,
  icon,
  isSelected = false,
}) => {
  return (
    <Root isSelected={isSelected}>
      <Label>
        {icon && <IconWrapper>{icon}</IconWrapper>}
        <span>{text}</span>
      </Label>
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
  padding-left: 18px;
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  ${({ isSelected, theme }) =>
    isSelected
      ? css`
          color: #333;
          cursor: default;
        `
      : css`
          &:hover {
            background-color: ${theme.palette.grey.light[2]};
          }
        `}
`;

const Label = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.text.fontSize.lg};
`;

const IconWrapper = styled.span`
  margin-right: 6px;
  width: 24px;
`;

const Indicator = styled.span`
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: -1px;
  ${({ theme }) => css`
    background-color: ${theme.palette.white};
    border-top: 1px solid ${theme.palette.border};
    border-bottom: 1px solid ${theme.palette.border};
    border-left: 1px solid ${theme.palette.border};
  `}
`;
