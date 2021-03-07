import React, { useLayoutEffect, useRef } from 'react';
import * as d3 from 'd3';

export type LineChartDatum = {
  x: number;
  y: number;
};

export type LineChartData = LineChartDatum[];

const line = () => {
  let svg: d3.Selection<d3.BaseType, LineChartData, any, any>;
  let data: LineChartData;

  const margin = {
    top: 20,
    bottom: 40,
    left: 40,
    right: 20,
  };
  const width = 600;
  const height = 400;

  const buildSvg = (container: d3.BaseType) => {
    if (!svg) {
      svg = d3
        .select<d3.BaseType, LineChartData>(container)
        .append('svg')
        .classed('line-chart', true);
      const containerGroup = svg
        .append('g')
        .classed('container-group', true)
        .attr('transform', `translate(${margin.left},${margin.top})`);
      containerGroup.append('g').classed('chart-group', true);
      containerGroup.append('g').classed('x-axis-group axis', true);
      containerGroup.append('g').classed('y-axis-group axis', true);
    }
    svg.attr('width', width).attr('height', height);
  };

  const drawAxes = (
    chartHeight: number,
    xAxis: d3.Axis<d3.NumberValue>,
    yAxis: d3.Axis<d3.NumberValue>,
  ) => {
    svg
      .select('.x-axis-group.axis')
      .attr('transform', `translate(0, ${chartHeight})`)
      .call(xAxis);
    svg.select('.y-axis-group.axis').call(yAxis);
  };

  const drawLine = (
    xScale: d3.ScaleLinear<number, number>,
    yScale: d3.ScaleLinear<number, number>,
  ) => {
    const l = d3
      .line<LineChartDatum>()
      .x(({ x }) => xScale(x))
      .y(({ y }) => yScale(y));
    const l2 = svg.select('.chart-group').datum(data);
    l2.append('path')
      .classed('line', true)
      .attr('d', l)
      .attr('fill', 'none')
      .attr('stroke', 'blue')
      .attr('stroke-width', 1);
    l2.exit().remove();
  };

  const exports = (
    _selection: d3.Selection<d3.BaseType, LineChartData, any, any>,
  ) => {
    _selection.each((_data, index, groups) => {
      data = _data;
      const chartWidth = width - margin.left - margin.right;
      const chartHeight = height - margin.bottom;
      const xScale = d3
        .scaleLinear()
        .rangeRound([0, chartWidth])
        .domain([
          d3.min(data, (d) => d.x) || 0,
          d3.max(data, (d) => d.x) || 100,
        ]);
      const yScale = d3
        .scaleLinear()
        .rangeRound([chartHeight, 0])
        .domain([
          d3.min(data, (d) => d.y) || 0,
          d3.max(data, (d) => d.y) || 100,
        ]);
      const xAxis = d3.axisBottom(xScale);
      const yAxis = d3.axisLeft(yScale).ticks(5);

      buildSvg(groups[index]);
      drawAxes(chartHeight, xAxis, yAxis);
      drawLine(xScale, yScale);
    });
  };

  return exports;
};

export interface LineChartProps {
  data: LineChartData;
}

export const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const rootEl = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (rootEl.current) {
      const l = line();
      d3.select(rootEl.current).datum(data).call(l);
    }
  }, [data]);

  return <div className="line-container" ref={rootEl} />;
};
