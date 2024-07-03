import { useState } from 'react';

const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [, , p3] = personajes;
console.log(p3);

const getArray = () => {
  return ['ABC', 123];
};

function useCustomState<T>(initialValue: T): [T, (newValue: T) => void] {
  const [value, setValue] = useState<T>(initialValue);

  // Adjusted to actually update the state
  const setCustomValue = (newValue: T) => {
    console.log('Hola Mundo'); // Keeping the log for demonstration
    setValue(newValue);
  };

  return [value, setCustomValue];
}

export { getArray, useCustomState };
