import { RefObject, useEffect } from 'react';

interface Args<T> extends IntersectionObserverInit {
  callback: IntersectionObserverCallback;
  target: RefObject<T>;
}

export const useIntersectionObserver = <T extends HTMLElement>({
  callback,
  root = null,
  rootMargin = '0px',
  target,
  threshold = 1.0,
}: Args<T>) => {
  useEffect(() => {
    const observer = new IntersectionObserver(callback, {
      root,
      rootMargin,
      threshold,
    });

    if (!target.current) {
      return undefined;
    }

    observer.observe(target.current);
    return () => {
      observer.disconnect();
    };
  }, [callback, root, rootMargin, target, threshold]);
};
