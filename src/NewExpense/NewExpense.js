import React, { useState } from 'react'

import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
  const [formIsOpen, setFormIsOpen] = useState(false);
  
  const viewFormChangeHandler = event => {
    setFormIsOpen(true);
  };
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
  }
  return (
    <div className='new-expense'>
      {formIsOpen && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>}
      {!formIsOpen && <button onClick={viewFormChangeHandler}>Add Expense</button>}
    </div>
  )
}

export default NewExpense