import React, { useMemo } from 'react';

import { usePlotContext } from '../PlotContext';

export interface CrossHairProps {}

export const CrossHair: React.FC<CrossHairProps> = () => {
  const { margin, xScales, yScale, mouseNearestNodePosition } =
    usePlotContext();

  const props = useMemo(() => {
    if (!xScales || !yScale) {
      return undefined;
    }
    if (mouseNearestNodePosition) {
      const x = xScales.linear(mouseNearestNodePosition.x);
      const y = yScale(mouseNearestNodePosition.y);
      return {
        xLineProps: {
          x1: x,
          x2: x,
          y1: yScale(yScale.domain()[0]),
          y2: yScale(yScale.domain()[1]),
        },
        yLineProps: {
          x1: xScales.linear(xScales.linear.domain()[0]),
          x2: xScales.linear(xScales.linear.domain()[1]),
          y1: y,
          y2: y,
        },
        pointProps: {
          cx: x,
          cy: y,
        },
      };
    }
    return undefined;
  }, [mouseNearestNodePosition, xScales, yScale]);

  return (
    <g
      transform={`translate(${margin.left},${margin.top})`}
      style={{ display: mouseNearestNodePosition ? undefined : 'none' }}
    >
      <line
        fill="none"
        stroke="#cacaca"
        strokeWidth="0.3px"
        {...props?.xLineProps}
      />
      <line
        fill="none"
        stroke="#cacaca"
        strokeWidth="0.3px"
        {...props?.yLineProps}
      />
      <circle fill="#456789" r="4" {...props?.pointProps} />
    </g>
  );
};
