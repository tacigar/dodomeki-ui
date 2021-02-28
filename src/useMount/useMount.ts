import { useEffect } from 'react';

export const useMount = (func: Function) => {
  useEffect(() => {
    func();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
