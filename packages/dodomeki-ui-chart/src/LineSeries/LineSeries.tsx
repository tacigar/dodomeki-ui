import * as d3Shape from 'd3-shape';
import React, { useMemo } from 'react';

import { usePlotContext } from '../PlotContext';
import { convertPlotDataToNumberPairArray, PlotData } from '../PlotData';

export interface LineSeriesProps {
  data: PlotData;
  stroke?: string;
  strokeDasharray?: string;
  strokeWidth?: number | string;
}

export const LineSeries: React.FC<LineSeriesProps> = ({
  data,
  strokeDasharray,
  strokeWidth = 1,
  stroke = '#456789',
}) => {
  const { xScales, yScale, margin } = usePlotContext();

  const pathData = useMemo(() => {
    if (!xScales || !yScale) {
      return undefined;
    }
    return (
      d3Shape
        .line()
        .x((d) => xScales.linear(d[0]))
        .y((d) => yScale(d[1]))(convertPlotDataToNumberPairArray(data)) ||
      undefined
    );
  }, [data, xScales, yScale]);

  return (
    <path
      d={pathData}
      transform={`translate(${margin.left},${margin.top})`}
      fill="none"
      stroke={stroke}
      strokeDasharray={strokeDasharray}
      strokeWidth={strokeWidth}
    />
  );
};
