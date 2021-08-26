import React, { useLayoutEffect, useRef } from 'react';
import * as d3 from 'd3';

export type BarChartDatum = {
  category: string;
  value: number;
};

export type BarChartData = BarChartDatum[];

const bar = () => {
  let svg: d3.Selection<d3.BaseType, BarChartData, any, any>;
  let data: BarChartData;

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
        .select<d3.BaseType, BarChartData>(container)
        .append('svg')
        .classed('bar-chart', true);
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
    xAxis: d3.Axis<string>,
    yAxis: d3.Axis<d3.NumberValue>,
  ) => {
    svg
      .select('.x-axis-group.axis')
      .attr('transform', `translate(0, ${chartHeight})`)
      .call(xAxis);
    svg
      .select('.y-axis-group.axis')
      .call(yAxis)
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .text('Frequence');
  };

  const drawBars = (
    chartHeight: number,
    xScale: d3.ScaleBand<string>,
    yScale: d3.ScaleLinear<number, number>,
  ) => {
    const bars = svg.select('.chart-group').selectAll('.bar').data(data);
    bars
      .enter()
      .append('rect')
      .classed('bar', true)
      .attr('x', ({ category }: BarChartDatum) => xScale(category) || 0)
      .attr('y', ({ value }: BarChartDatum) => yScale(value))
      .attr('width', xScale.bandwidth())
      .attr('fill', '#accd89')
      .attr(
        'height',
        ({ value }: BarChartDatum) => chartHeight - yScale(value),
      );
    bars.exit().style('opacity', 0).remove();
  };

  const exports = (
    _selection: d3.Selection<d3.BaseType, BarChartData, any, any>,
  ) => {
    _selection.each((_data, index, groups) => {
      data = _data;
      const chartWidth = width - margin.left - margin.right;
      const chartHeight = height - margin.bottom;
      const xScale = d3
        .scaleBand()
        .rangeRound([0, chartWidth])
        .padding(0.1)
        .domain(data.map((d) => d.category));
      const yScale = d3
        .scaleLinear()
        .rangeRound([chartHeight, 0])
        .domain([0, d3.max(data, (d) => d.value) || 100]);
      const xAxis = d3.axisBottom(xScale);
      const yAxis = d3.axisLeft(yScale).ticks(5);

      buildSvg(groups[index]);
      drawAxes(chartHeight, xAxis, yAxis);
      drawBars(chartHeight, xScale, yScale);
    });
  };

  return exports;
};

export interface BarChartProps {
  data: BarChartData;
}

export const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const rootEl = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (rootEl.current) {
      const b = bar();
      d3.select(rootEl.current).datum(data).call(b);
    }
  }, [data]);

  return <div className="bar-container" ref={rootEl} />;
};
