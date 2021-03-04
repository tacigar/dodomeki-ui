import React from 'react';
import styled from 'styled-components';

import { ButtonBox, ButtonColorType, ButtonSizeType } from '../Button';

export type ButtonGroupSizeType = ButtonSizeType;
export type ButtonGroupColorType = ButtonColorType;
export type ButtonGroupVariantType = 'filled' | 'outlined';

export interface ButtonGroupProps {
  size?: ButtonGroupSizeType;
  variant?: ButtonGroupVariantType;
  color?: ButtonGroupColorType;
  children: React.ReactElement[];
}

export const ButtonGroup = styled.div.attrs<ButtonGroupProps>((props) => ({
  children: React.Children.map(props.children, (child) =>
    React.cloneElement(child, {
      size: props.size,
      variant: props.variant,
      color: props.color,
    }),
  ),
}))<ButtonGroupProps>`
  & > ${ButtonBox} {
    position: relative;
    border-radius: 0px;
    box-shadow: none;

    &:hover {
      transform: translateY(0);
    }

    &:active {
      transform: translateY(0);
    }

    :first-child {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }

    :last-child {
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }

    :not(:last-child) {
      border-right: none;
    }
  }
`;
