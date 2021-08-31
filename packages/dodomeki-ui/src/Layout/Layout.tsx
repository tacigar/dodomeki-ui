import React from 'react';
import styled from 'styled-components';

import { Header } from '../Header';
import { Sider } from '../Sider';

const siderWidth = 240;
const headerHeight = 48;

export interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  let mainContent: React.ReactElement | null = null;
  let sider: React.ReactElement | null = null;
  let header: React.ReactElement | null = null;

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === Sider) {
        sider = child;
      } else if (child.type === Header) {
        header = child;
      } else {
        mainContent = child;
      }
    }
  });

  return (
    <Root>
      {header && <HeaderWrapper>{header}</HeaderWrapper>}
      {sider && <SiderWrapper header={header}>{sider}</SiderWrapper>}
      <Main header={header} sider={sider}>
        {mainContent}
      </Main>
    </Root>
  );
};

const Root = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${headerHeight}px;
`;

const SiderWrapper = styled.div<{ header: React.ReactElement | null }>`
  position: absolute;
  top: ${({ header }) => (header ? `${headerHeight}px` : '0')};
  height: ${({ header }) =>
    header ? `calc(100% - ${headerHeight}px)` : '100%'};
  width: ${siderWidth}px;
  color: #565656;
  border-right: 1px solid ${({ theme }) => theme.palette.border};
`;

const Main = styled.main<{
  header: React.ReactElement | null;
  sider: React.ReactElement | null;
}>`
  position: absolute;
  top: ${({ header }) => (header ? `${headerHeight}px` : '0')};
  left: ${({ sider }) => (sider ? `${siderWidth}px` : '0')};
  height: ${({ header }) =>
    header ? `calc(100% - ${headerHeight}px)` : '100%'};
`;
