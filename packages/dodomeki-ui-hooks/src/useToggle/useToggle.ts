import { useCallback, useState } from 'react';

export const useToggle = (
  initialValue: boolean,
): [boolean, (value?: boolean) => void] => {
  const [state, setState] = useState(initialValue);
  const toggle = useCallback((value?: boolean) => {
    setState((prev) => (typeof value === 'boolean' ? value : !prev));
  }, []);
  return [state, toggle];
};
