import { act, renderHook } from '@testing-library/react';
import { ChangeEvent } from 'react';
import { useForm } from '../../src/hooks';

describe('useForm test', () => {
  const props = {
    initialValues: {
      name: 'John Doe',
      email: 'example@mail.com',
      age: 25,
      phone: '1234567890',
      address: '1234 Elm St',
    },
  };

  test('should accept and return initial values', () => {
    // Your test goes here
    const { result } = renderHook(useForm, { initialProps: props });
    const { values, handleChange, reset } = result.current;

    expect(values).toEqual(props.initialValues);
    expect(typeof handleChange).toBe('function');
    expect(typeof reset).toBe('function');
  });

  test('should update all values and reset', () => {
    const { result } = renderHook(useForm, { initialProps: props });
    const { handleChange, reset } = result.current;

    const newValues = {
      name: 'Jane Doe',
      email: 'jane@example.com',
      age: 30,
      phone: '0987654321',
      address: '4321 Maple St',
    };

    Object.entries(newValues).forEach(([key, value]) => {
      const event = {
        target: {
          name: key,
          value: value,
        },
      } as ChangeEvent<HTMLInputElement>;

      act(handleChange.bind(undefined, event));
    });

    // Verificar que cada valor se haya actualizado correctamente
    Object.entries(newValues).forEach(([key, value]) => {
      expect(result.current.values[key as keyof typeof newValues]).toBe(value);
    });

    act(reset);

    expect(result.current.values).toEqual(props.initialValues);
  });
});
