import * as d3Axis from 'd3-axis';
import * as d3Selection from 'd3-selection';
import React, { useEffect, useRef } from 'react';

import { usePlotContext } from '../PlotContext';

export interface YAxisProps {}

export const YAxis: React.FC<YAxisProps> = () => {
  const rootEl = useRef<SVGGElement | null>(null);
  const { margin, yScale } = usePlotContext();

  useEffect(() => {
    if (!yScale || !rootEl.current) {
      return;
    }
    d3Selection.select(rootEl.current).call(d3Axis.axisLeft(yScale));
  }, [yScale]);

  return (
    <g ref={rootEl} transform={`translate(${margin.left},${margin.top})`} />
  );
};
