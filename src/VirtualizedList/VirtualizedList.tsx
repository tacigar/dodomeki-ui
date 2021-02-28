import React, { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';

export interface VirtualizedListProps<T> {
  height?: number;
  items: T[];
  itemHeight?: number;
  renderItem: (item: T, style: React.CSSProperties) => React.ReactNode;
  width?: number | string;
}

export const VirtualizedList = <T extends object | string>({
  height = 300,
  items,
  itemHeight = 20,
  renderItem,
  width = 'auto',
}: VirtualizedListProps<T>) => {
  const [scrollTop, setScrollTop] = useState(0);

  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    items.length - 1,
    Math.floor((scrollTop + height) / itemHeight),
  );

  const handleScroll = useCallback((event: React.UIEvent<HTMLUListElement>) => {
    console.log(event.currentTarget.scrollTop);
    setScrollTop(event.currentTarget.scrollTop);
  }, []);

  const renderedItems = useMemo(() => items.slice(startIndex, endIndex + 1), [
    endIndex,
    items,
    startIndex,
  ]);

  return (
    <Root height={height} onScroll={handleScroll} width={width}>
      <List height={items.length * itemHeight}>
        {renderedItems.map((item, index) =>
          renderItem(item, {
            position: 'absolute',
            top: `${(index + startIndex) * itemHeight}px`,
            width,
          }),
        )}
      </List>
    </Root>
  );
};

const Root = styled.div<{ height: number; width: number | string }>`
  overflow-y: auto;
  height: ${({ height }) => height}px;
  width: ${({ width }) => {
    if (typeof width === 'number') {
      return `${width}px`;
    }
    return width;
  }};
`;

const List = styled.ul<{ height: number }>`
  list-style: none;
  position: relative;
  height: ${({ height }) => height}px;
`;
