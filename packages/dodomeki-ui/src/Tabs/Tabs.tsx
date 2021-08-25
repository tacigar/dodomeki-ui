import React from 'react';
import styled from 'styled-components';

import { Tab } from '../Tab/Tab';

export interface TabsProps {
  value: any;
  onChange: (value: any) => void;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  value,
  onChange,
  className,
  children,
}) => {
  const clonedChildren = React.Children.map(children, (child) => {
    if (!React.isValidElement(child) || child.type !== Tab) {
      return null;
    }
    const selected = child.props.value === value;
    return React.cloneElement(child, {
      _isSelected: selected,
      _onChange: onChange,
    });
  });

  return (
    <Root className={className} role="tablist">
      {clonedChildren}
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  position: relative;
  border-bottom: 1px solid ${(props) => props.theme.palette.border};
`;
