import React, { useEffect, useMemo, useRef } from 'react';

const ratio = (max: number, min: number, value: number) =>
  (value - min) / (max - min);

export interface LineChartProps {
  width?: number;
  height?: number;
  points: { x: number; y: number }[];
  margin?: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
}

export const LineChart: React.FC<LineChartProps> = ({
  width = 360,
  height = 240,
  points,
  margin = {
    top: 5,
    right: 5,
    bottom: 30,
    left: 30,
  },
}) => {
  const canvasEl = useRef<HTMLCanvasElement>(null);

  const { top, right, bottom, left } = margin;

  const { minX, maxX, minY, maxY } = useMemo(() => {
    const xs = points.map(({ x }) => x);
    const ys = points.map(({ y }) => y);
    return {
      minX: Math.min(...xs),
      maxX: Math.max(...xs),
      minY: Math.min(...ys),
      maxY: Math.max(...ys),
    };
  }, [points]);

  const frameWidth = width - (right + left);
  const frameHeight = height - (top + bottom);

  const sortedPoints = useMemo(() => {
    return [...points].sort((a, b) => a.x - b.x);
  }, [points]);

  useEffect(() => {
    if (canvasEl.current) {
      const ctx = canvasEl.current.getContext('2d');
      if (ctx) {
        // Draw the outer frame.
        ctx.beginPath();
        ctx.moveTo(left, top);
        ctx.lineTo(left, height - bottom);
        ctx.lineTo(width - right, height - bottom);
        ctx.strokeStyle = 'rgba(30, 30, 30, 0.75)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Draw X-axis.
        ctx.save();
        ctx.translate(left, top);
        for (let i = 0; i <= 5; i += 1) {
          const xv = ((maxX - minX) / 5) * i + minX;
          const xp = ratio(maxX, minX, xv) * frameWidth;
          ctx.beginPath();
          ctx.moveTo(xp, frameHeight);
          ctx.lineTo(xp, frameHeight + 5);
          ctx.stroke();
          ctx.fillText(xv.toString(), xp - 5, frameHeight + 15);
        }
        ctx.restore();

        // Draw Y-axis.
        ctx.save();
        ctx.translate(left, top);
        for (let i = 0; i <= 5; i += 1) {
          const yv = ((maxY - minY) / 5) * i + minY;
          const yp = (1 - ratio(maxY, minY, yv)) * frameHeight;
          ctx.beginPath();
          ctx.moveTo(0, yp);
          ctx.lineTo(-5, yp);
          ctx.stroke();
          ctx.fillText(yv.toString(), -30, yp + 2);
        }
        ctx.restore();

        // Draw line.
        ctx.save();
        ctx.translate(left, top);
        ctx.beginPath();
        sortedPoints.forEach(({ x, y }, index) => {
          const xp = ratio(maxX, minX, x) * frameWidth;
          const yp = (1 - ratio(maxY, minY, y)) * frameHeight;
          if (index === 0) {
            ctx.moveTo(xp, yp);
            return;
          }
          ctx.lineTo(xp, yp);
        });
        ctx.strokeStyle = 'rgba(45, 68, 210, 0.75)';
        ctx.stroke();

        ctx.beginPath();
        sortedPoints.forEach(({ x, y }) => {
          const xp = ratio(maxX, minX, x) * frameWidth;
          const yp = (1 - ratio(maxY, minY, y)) * frameHeight;
          ctx.moveTo(xp + 3, yp);
          ctx.arc(xp, yp, 3, 0, Math.PI * 2, true);
        });
        ctx.strokeStyle = 'rgba(45, 45, 45, 0.75)';
        ctx.stroke();
        ctx.restore();
      }
    }
  }, [
    bottom,
    frameHeight,
    frameWidth,
    height,
    left,
    maxX,
    maxY,
    minX,
    minY,
    right,
    sortedPoints,
    top,
    width,
  ]);

  return <canvas width={width} height={height} ref={canvasEl} />;
};
