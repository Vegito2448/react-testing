import { ChangeEvent, useState } from 'react';

interface UseFormProps<T> {
  initialValues: T;
}

export function useForm<T extends object>({ initialValues }: UseFormProps<T>) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name = '', value } = e.target;
    console.log(name, value);
    if (name)
      setValues((prev) => ({
        ...prev,
        [name]: value,
      }));
  };

  const reset = () => setValues(initialValues);

  return {
    // properties
    values,

    // methods
    handleChange,
    reset,
  };
}
