import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';

export interface FormSliderProps {
  max?: number;
  min?: number;
  onChange?: (newValue: number) => void;
  step?: number;
  value?: number;
}

export const FormSlider: React.FC<FormSliderProps> = ({
  max = 100,
  min = 0,
  onChange,
  step = 1,
  value = 0,
}) => {
  const rootEl = useRef<HTMLDivElement>(null);

  const handleChange = useCallback(
    (newValue: number) => {
      if (onChange) {
        onChange(newValue);
      }
    },
    [onChange],
  );

  const lastestValue = useRef(value);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!rootEl.current) {
        return;
      }
      const { left, right } = rootEl.current.getBoundingClientRect();
      const { clientX } = event;

      let nextValue: number;
      if (left >= clientX) {
        nextValue = min;
      } else if (right <= clientX) {
        nextValue = max;
      } else {
        nextValue = ((clientX - left) / (right - left)) * (max - min) + min;
      }
      if (Math.abs(nextValue - lastestValue.current) >= step) {
        // Drag toward the right.
        if (nextValue > lastestValue.current) {
          nextValue = Math.floor(nextValue / 4) * 4;
        }
        // Drag toward the left.
        else {
          nextValue = Math.ceil(nextValue / 4) * 4;
        }
        lastestValue.current = nextValue;
        handleChange(nextValue);
      }
    },
    [handleChange, max, min, step],
  );

  const handleMouseUp = useCallback(() => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  }, [handleMouseMove]);

  const handleMouseDown = useCallback(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    lastestValue.current = value;
  }, [handleMouseMove, handleMouseUp, value]);

  const left = ((value - min) / (max - min)) * 100;

  return (
    <Root ref={rootEl}>
      <Rail />
      <Track style={{ width: `${left}%` }} />
      <Handle style={{ left: `${left}%` }} onMouseDown={handleMouseDown} />
    </Root>
  );
};

const Root = styled.div`
  position: relative;
  margin: 10px 6px;
`;

const Rail = styled.div`
  position: absolute;
  height: 2px;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.grey.light[1]};
`;

const Track = styled.div`
  position: absolute;
  height: 2px;
  background-color: ${({ theme }) => theme.palette.primary[3]};
`;

const Handle = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  margin-top: -5px;
  border: 2px solid ${({ theme }) => theme.palette.primary[3]};
  border-radius: 50%;
  cursor: pointer;
`;
