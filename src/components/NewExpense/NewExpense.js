import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExprense = (props) => {
  const saveExpenseDataHandler = (enderedExpenseData)=>{
    const expenseData = {
      ...enderedExpenseData,
      id: Math.random().toString(),
    }
    props.onAddExpense(expenseData)

  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} />
    </div>
  )
}

export default NewExprense