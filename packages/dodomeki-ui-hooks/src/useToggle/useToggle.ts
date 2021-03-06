import { useReducer } from 'react';

export const useToggle = (
  initialValue: boolean,
): [boolean, (value?: boolean) => void] => {
  return useReducer(
    (state: boolean, value: boolean) =>
      typeof state === 'undefined' ? !state : value,
    initialValue,
  );
};
