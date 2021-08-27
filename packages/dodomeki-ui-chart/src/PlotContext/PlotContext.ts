import * as d3Scale from 'd3-scale';
import React, { useContext } from 'react';
import { PlotData } from '../PlotData';

export interface PlotContextType {
  allData: PlotData[];
  width: number;
  height: number;
  margin: {
    top: number;
    bottom: number;
    right: number;
    left: number;
  };
  chartWidth: number;
  chartHeight: number;
  xScale?: d3Scale.ScaleLinear<number, number, never>;
  yScale?: d3Scale.ScaleLinear<number, number, never>;
}

export const PlotContext = React.createContext<PlotContextType | undefined>(
  undefined,
);

export const usePlotContext = () => {
  const ctx = useContext(PlotContext);
  if (!ctx) {
    throw new Error('An plot context must be passed via PlotContext.Provider');
  }
  return ctx;
};

export const PlotContextProvider = PlotContext.Provider;
