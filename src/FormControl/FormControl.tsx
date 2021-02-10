import React from 'react';
import { FormContext } from '../FormContext';

export interface FormControlProps {
  disabled?: boolean;
  error?: boolean;
  required?: boolean;
}

export const FormControl: React.FC<FormControlProps> = ({
  children,
  disabled = false,
  error = false,
  required = false,
}) => {
  const ctx = {
    disabled,
    error,
    required,
  };

  return <FormContext.Provider value={ctx}>{children}</FormContext.Provider>;
};
