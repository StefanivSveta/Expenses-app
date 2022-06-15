import useInput from '../hooks/useInput';
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const {
    value: enteredTitle,
    isValid: titleIsValid,
    hasError: titleHasError,
    valueChangeHandler: titleChangeHandler,
    valueBlurHandler: titleBlurHandler,
    reset: resetTitleInput,
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredAmount,
    isValid: amountIsValid,
    hasError: amountHasError,
    valueChangeHandler: amountChangeHandler,
    valueBlurHandler: amountBlurHandler,
    reset: resetAmountInput,
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredDate,
    isValid: dateIsValid,
    hasError: dateHasError,
    valueChangeHandler: dateChangeHandler,
    valueBlurHandler: dateBlurHandler,
    reset: resetDateInput,
  } = useInput(value => value.trim() !== '');

  let formIsValid = false;

  if (titleIsValid && amountIsValid && dateIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    resetTitleInput();
    resetAmountInput();
    resetDateInput();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            onBlur={titleBlurHandler}
          />
          {titleHasError && (<p className='error-text'>Title must not be empty.</p>)}
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
            onBlur={amountBlurHandler}
          />
          {amountHasError && (<p className='error-text'>Amount must not be empty.</p>)}
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2025-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
            onBlur={dateBlurHandler}
          />
          {dateHasError && (<p className='error-text'>Choose a date.</p>)}
        </div>
      </div>
      <div className="new-expense__actions ">
        <button type="submit" disabled={!formIsValid}>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
