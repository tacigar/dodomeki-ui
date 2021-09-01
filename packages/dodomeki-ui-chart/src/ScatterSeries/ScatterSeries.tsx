import * as d3Selection from 'd3-selection';
import React, { useEffect, useRef } from 'react';
import { usePlotContext } from '../PlotContext';

import { convertPlotDataToNumberPairArray, PlotData } from '../PlotData';

export interface ScatterSeriesProps {
  data: PlotData;
  fill?: string;
}

export const ScatterSeries: React.FC<ScatterSeriesProps> = ({
  data,
  fill = '#456789',
}) => {
  const rootEl = useRef<SVGGElement | null>(null);
  const { xScales, yScale, margin } = usePlotContext();

  useEffect(() => {
    if (!xScales || !yScale) {
      return;
    }

    d3Selection
      .select(rootEl.current)
      .selectAll('circle')
      .data(convertPlotDataToNumberPairArray(data))
      .join(
        (enter) =>
          enter
            .append('circle')
            .attr('cx', (d) => xScales.linear(d[0]))
            .attr('cy', (d) => yScale(d[1]))
            .attr('r', 4)
            .attr('fill', fill),
        (update) => update,
        (exit) => exit.remove(),
      );
  }, [data, fill, xScales, yScale]);

  return (
    <g ref={rootEl} transform={`translate(${margin.left},${margin.top})`} />
  );
};
