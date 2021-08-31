import React from 'react';
import styled from 'styled-components';

import { SiderContent } from '../SiderContent';

const siderWidth = 240;

export interface SiderProps {}

export const Sider: React.FC<SiderProps> = ({ children }) => {
  let mainContent: React.ReactElement | null = null;
  let siderContent: React.ReactElement | null = null;

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === SiderContent) {
        siderContent = child;
      } else {
        mainContent = child;
      }
    }
  });

  return (
    <>
      <Root>{siderContent}</Root>
      <Main>{mainContent}</Main>
    </>
  );
};

const Root = styled.div`
  position: fixed;
  height: 100vh;
  width: ${siderWidth}px;
  border-right: 1px solid ${({ theme }) => theme.palette.border};
`;

const Main = styled.main`
  margin-left: ${siderWidth}px;
`;
