export type PlotData = { x: number; y: number }[] | { x: Date; y: number }[];

export const convertPlotDataToNumberPairArray = (
  data: PlotData,
): [number, number][] =>
  data.map((datum) => {
    if (typeof datum.x === 'number') {
      return [datum.x, datum.y];
    }
    return [datum.x.valueOf(), datum.y];
  });
