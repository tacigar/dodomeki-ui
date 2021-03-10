import React, { ChangeEventHandler } from 'react';
import styled from 'styled-components';

export interface FormSliderProps {
  max?: number;
  min?: number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  step?: number;
  value?: string | number;
}

export const FormSlider: React.FC<FormSliderProps> = ({
  max = 100,
  min = 0,
  onChange,
  step = 1,
  value = 0,
}) => {
  return (
    <Input max={max} min={min} onChange={onChange} step={step} value={value} />
  );
};

interface InputProps {
  min: number;
  max: number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  step: number;
  value: string | number;
}

const Input = styled.input.attrs<InputProps>(
  ({ min, max, onChange, step, value }) => ({
    max,
    min,
    onChange,
    step,
    type: 'range',
    value,
  }),
)<InputProps>``;
