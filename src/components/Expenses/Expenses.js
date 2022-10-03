import React, {useState} from 'react'

import './Expenses.css'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'

const Expenses = (prors) => {
  const [filteredYear, setFilteredYear] = useState('2022')
  const filterChangeHandler = selectedear => {
    setFilteredYear(selectedear)
  }


  return (
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter = {filterChangeHandler}/>
      {prors.items.map((expense)=>(
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  )
}

export default Expenses