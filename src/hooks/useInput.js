import { useState } from 'react';

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [valueInputIsTouched, setValueInputIsTouched] = useState(false);

  const valueIsValid = enteredValue.trim() !== '';
  const hasError = !valueIsValid && valueInputIsTouched;

  const valueChangeHandler = event => {
    setEnteredValue(event.target.value)
  }

  const valueBlurHandler = event => {
    setValueInputIsTouched(true)
  }

  const reset = () => {
    setEnteredValue('');
    setValueInputIsTouched(false);
  }
   
  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  }
  

  // const [enteredValue, setEnteredValue] = useState('');
  // const [isTouched, setIsTouched] = useState(false);

  // const valueIsValid = validateValue(enteredValue);
  // const hasError = !valueIsValid && isTouched;

  // const valueChangeHandler = (event) => {
  //   setEnteredValue(event.target.value);
  // };

  // const inputBlurHandler = (event) => {
  //   setIsTouched(true);
  // };

  // const reset = () => {
  //   setEnteredValue('');
  //   setIsTouched(false);
  // };

  // return {
  //   value: enteredValue,
  //   isValid: valueIsValid,
  //   hasError,
  //   valueChangeHandler,
  //   inputBlurHandler,
  //   reset
  // };
};

export default useInput;