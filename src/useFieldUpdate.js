import { useEffect, useState } from 'react';

const useFieldUpdate = (
  initialValue,
  validator = (value) => {
    return false;
  }
) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState('');
  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  // validator must return the message if its not valid
  useEffect(() => {
    let stateError = validator(value);
    setError(stateError);
  }, [value]);

  return { value, changeHandler, error };
};

export default useFieldUpdate;
