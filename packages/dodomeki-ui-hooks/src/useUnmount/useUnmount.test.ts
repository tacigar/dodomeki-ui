import { renderHook } from '@testing-library/react-hooks';

import { useUnmount } from './useUnmount';

describe('useUnmount', () => {
  it('should call the callback when unmount', () => {
    const spy = jest.fn();
    const hook = renderHook(() => useUnmount(spy));
    hook.unmount();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
