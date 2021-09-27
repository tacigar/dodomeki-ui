import { useEffect } from 'react';

export const useUnmount = (func: () => any) => {
  useEffect(
    () => func,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
};
