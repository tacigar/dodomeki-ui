import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { useUnmount } from './useUnmount';

describe('useUnmount', () => {
  it('should call the callback when unmount', () => {
    const spy = vi.fn();
    const hook = renderHook(() => useUnmount(spy));
    hook.unmount();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
