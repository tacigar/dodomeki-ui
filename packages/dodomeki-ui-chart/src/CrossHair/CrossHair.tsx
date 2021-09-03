import React, { useMemo } from 'react';

import { usePlotContext } from '../PlotContext';

export interface CrossHairProps {}

export const CrossHair: React.FC<CrossHairProps> = () => {
  const { margin, xScales, yScale, mouseNearestNodePosition } =
    usePlotContext();

  const xLineProps = useMemo(() => {
    if (!xScales || !yScale) {
      return undefined;
    }
    if (mouseNearestNodePosition) {
      const x = xScales.linear(mouseNearestNodePosition.x);
      return {
        x1: x,
        x2: x,
        y1: yScale(yScale.domain()[0]),
        y2: yScale(yScale.domain()[1]),
      };
    }
    return undefined;
  }, [mouseNearestNodePosition, xScales, yScale]);

  const yLineProps = useMemo(() => {
    if (!xScales || !yScale) {
      return undefined;
    }
    if (mouseNearestNodePosition) {
      const y = yScale(mouseNearestNodePosition.y);
      return {
        x1: xScales.linear(xScales.linear.domain()[0]),
        x2: xScales.linear(xScales.linear.domain()[1]),
        y1: y,
        y2: y,
      };
    }
    return undefined;
  }, [mouseNearestNodePosition, xScales, yScale]);

  const pointProps = useMemo(() => {
    if (!xScales || !yScale) {
      return undefined;
    }
    if (mouseNearestNodePosition) {
      return {
        cx: xScales.linear(mouseNearestNodePosition.x),
        cy: yScale(mouseNearestNodePosition.y),
      };
    }
    return undefined;
  }, [mouseNearestNodePosition, xScales, yScale]);

  return (
    <g
      transform={`translate(${margin.left},${margin.top})`}
      style={{ display: mouseNearestNodePosition ? undefined : 'none' }}
    >
      <line fill="none" stroke="#cacaca" strokeWidth="0.3px" {...xLineProps} />
      <line fill="none" stroke="#cacaca" strokeWidth="0.3px" {...yLineProps} />
      <circle fill="#456789" r="4" {...pointProps} />
    </g>
  );
};
