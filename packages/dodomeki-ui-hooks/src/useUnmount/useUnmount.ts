import { useEffect } from 'react';

export const useUnmount = (func: Function) => {
  useEffect(
    () => () => {
      func();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
};
