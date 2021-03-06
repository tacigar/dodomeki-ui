import React from 'react';

interface FormContextType {
  disabled: boolean;
}

export const FormContext = React.createContext<FormContextType>({
  disabled: false,
});

export const useFormContext = () => React.useContext(FormContext);
