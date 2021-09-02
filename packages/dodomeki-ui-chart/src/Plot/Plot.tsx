import * as d3Scale from 'd3-scale';
import React, { useMemo } from 'react';
import { AreaSeries } from '../AreaSeries';
import { LineSeries } from '../LineSeries';
import { PlotContextProvider } from '../PlotContext';
import { convertPlotDataToNumberPairArray, PlotData } from '../PlotData';
import { ScatterSeries } from '../ScatterSeries';

export interface PlotProps {
  width: number;
  height: number;
  margin?: {
    top: number;
    bottom: number;
    right: number;
    left: number;
  };
}

export const Plot: React.FC<PlotProps> = ({
  width,
  height,
  margin = { top: 5, bottom: 20, right: 10, left: 40 },
  children,
}) => {
  const chartWidth = width - (margin.right + margin.left);
  const chartHeight = height - (margin.top + margin.bottom);

  const { allData, minX, minY, maxX, maxY } = useMemo(() => {
    const ret = {
      allData: [] as PlotData[],
      minX: Number.MAX_VALUE,
      minY: Number.MAX_VALUE,
      maxX: Number.MIN_VALUE,
      maxY: Number.MIN_VALUE,
    };
    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child)) {
        if (
          child.type === LineSeries ||
          child.type === ScatterSeries ||
          child.type === AreaSeries
        ) {
          const data: PlotData = child.props.data;
          convertPlotDataToNumberPairArray(data).forEach(([x, y]) => {
            ret.minX = Math.min(ret.minX, x);
            ret.minY = Math.min(ret.minY, y);
            ret.maxX = Math.max(ret.maxX, x);
            ret.maxY = Math.max(ret.maxY, y);
          });
          ret.allData.push(data);
        }
      }
    });
    return ret;
  }, [children]);

  const xScales = useMemo(
    () => ({
      linear: d3Scale.scaleLinear().domain([minX, maxX]).range([0, chartWidth]),
    }),
    [chartWidth, maxX, minX],
  );

  const yScale = useMemo(
    () => d3Scale.scaleLinear().domain([minY, maxY]).range([chartHeight, 0]),
    [chartHeight, maxY, minY],
  );

  const ctx = useMemo(
    () => ({
      allData,
      width,
      height,
      chartWidth,
      chartHeight,
      margin,
      xScales,
      yScale,
    }),
    [allData, chartHeight, chartWidth, height, margin, width, xScales, yScale],
  );

  return (
    <PlotContextProvider value={ctx}>
      <div style={{ width: `${width}px`, height: `${height}px` }}>
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
          {children}
        </svg>
      </div>
    </PlotContextProvider>
  );
};
