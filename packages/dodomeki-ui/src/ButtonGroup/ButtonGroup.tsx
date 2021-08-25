import React from 'react';
import styled from 'styled-components';

import { ButtonRoot, ButtonSizeType } from '../Button';

export type ButtonGroupSizeType = ButtonSizeType;
export type ButtonGroupVariantType = 'filled' | 'outlined';

export interface ButtonGroupProps {
  size?: ButtonGroupSizeType;
  variant?: ButtonGroupVariantType;
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
  & > ${ButtonRoot} {
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
