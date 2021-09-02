import * as d3Shape from 'd3-shape';
import React, { useMemo } from 'react';

import { usePlotContext } from '../PlotContext';
import { convertPlotDataToNumberPairArray, PlotData } from '../PlotData';

export interface AreaSeriesProps {
  data: PlotData;
  fill?: string;
}

export const AreaSeries: React.FC<AreaSeriesProps> = ({
  data,
  fill = '#456789',
}) => {
  const { xScales, yScale, margin } = usePlotContext();

  const pathData = useMemo(() => {
    if (!xScales || !yScale) {
      return undefined;
    }
    return (
      d3Shape
        .area()
        .x((d) => xScales.linear(d[0]))
        .y0(yScale(yScale.domain()[0]))
        .y1((d) => yScale(d[1]))(convertPlotDataToNumberPairArray(data)) ||
      undefined
    );
  }, [data, xScales, yScale]);

  return (
    <path
      d={pathData}
      transform={`translate(${margin.left},${margin.top})`}
      fill={fill}
    />
  );
};
