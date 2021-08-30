import React from 'react';
import styled, { css } from 'styled-components';

export interface SiderTitleProps {
  title: string;
  isSub?: boolean;
}

export const SiderTitle: React.FC<SiderTitleProps> = ({
  title,
  isSub = false,
}) => {
  return <Root isSub={isSub}>{title}</Root>;
};

const Root = styled.div<{ isSub: boolean }>`
  ${(props) =>
    props.isSub
      ? css`
          font-size: ${props.theme.text.fontSize.lg};
          color: ${props.theme.palette.grey.light[9]};
        `
      : css`
          font-size: ${props.theme.text.fontSize.xs};
        `}
`;
