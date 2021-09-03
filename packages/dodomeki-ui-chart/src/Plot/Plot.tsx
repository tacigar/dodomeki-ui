import * as d3Array from 'd3-array';
import * as d3Scale from 'd3-scale';
import * as d3Selection from 'd3-selection';
import React, { useEffect, useMemo, useRef, useState } from 'react';

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
  const overlayRectEl = useRef<SVGRectElement | null>(null);
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

  const [mouseNearestNodePosition, setMouseNearestNodePosition] =
    useState<{ x: number; y: number }>();

  useEffect(() => {
    const bisect = d3Array.bisector((d: number[]) => d[0]).left;

    d3Selection
      .select(overlayRectEl.current)
      .on('mouseout', () => setMouseNearestNodePosition(undefined))
      .on('mousemove', (event) => {
        if (!xScales || !yScale) {
          return;
        }
        const pointer = d3Selection.pointer(event);
        const x = xScales.linear.invert(pointer[0]);
        const y = yScale.invert(pointer[1]);

        let nearest: [number, number] | undefined;
        allData.forEach((data) => {
          const convertedData = convertPlotDataToNumberPairArray(data);
          const i = bisect(convertedData, x);

          let d = convertedData[i];
          if (i >= 1 && x - convertedData[i - 1][0] < d[0] - x) {
            d = convertedData[i - 1];
          }

          if (!nearest) {
            nearest = d;
          } else if (Math.abs(nearest[1] - y) > Math.abs(d[1] - y)) {
            nearest = d;
          }
        });

        if (!nearest) {
          setMouseNearestNodePosition(undefined);
        } else {
          setMouseNearestNodePosition({ x: nearest[0], y: nearest[1] });
        }
      });
  }, [allData, xScales, yScale]);

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
      mouseNearestNodePosition,
    }),
    [
      allData,
      chartHeight,
      chartWidth,
      height,
      margin,
      mouseNearestNodePosition,
      width,
      xScales,
      yScale,
    ],
  );

  return (
    <PlotContextProvider value={ctx}>
      <div style={{ width: `${width}px`, height: `${height}px` }}>
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
          {children}
          <rect
            ref={overlayRectEl}
            width={chartWidth}
            height={chartHeight}
            transform={`translate(${margin.left},${margin.top})`}
            fill="none"
            stroke="none"
            pointerEvents="all"
          />
        </svg>
      </div>
    </PlotContextProvider>
  );
};
