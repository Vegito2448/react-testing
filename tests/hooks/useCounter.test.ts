import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks';

describe('useCounter', () => {
  test('should render initial count', () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  test('should accept initial count', () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 5 },
    });
    expect(result.current.count).toBe(5);
  });

  test('should increment count', () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });
  test('should decrement count', () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.decrement());
    expect(result.current.count).toBe(-1);
  });
});
