import * as d3Axis from 'd3-axis';
import * as d3Selection from 'd3-selection';
import React, { useEffect, useRef } from 'react';

import { usePlotContext } from '../PlotContext';

export interface XAxisProps {}

export const XAxis: React.FC<XAxisProps> = () => {
  const rootEl = useRef<SVGGElement | null>(null);
  const { margin, chartHeight, xScales } = usePlotContext();

  useEffect(() => {
    if (!xScales || !rootEl.current) {
      return;
    }
    d3Selection.select(rootEl.current).call(d3Axis.axisBottom(xScales.linear));
  }, [xScales]);

  return (
    <g
      ref={rootEl}
      transform={`translate(${margin.left},${chartHeight + margin.top})`}
    />
  );
};
