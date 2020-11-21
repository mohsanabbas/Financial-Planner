import { useState } from 'react';

export default function useInput(initialValue: any) {
  const [values, setValues] = useState(initialValue);
  return [
    values,
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const regExp = /^[0-9\b]+$/;
      if (e.target.value === '' || regExp.test(e.target.value)) {
        setValues({
          ...values,
          [e.target.name]: e.target.value.replace(/^0+/, '')
        });
      }
    }
  ];
}
