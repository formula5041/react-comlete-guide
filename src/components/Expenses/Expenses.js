import React, {useState} from 'react'

import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022')
  const filterChangeHandler = selectedear => {
    setFilteredYear(selectedear)
  }  

  const filteredExpenses = props.items.filter(el=>{
    return el.date.getFullYear().toString() === filteredYear
  })

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter = {filterChangeHandler}/>
      <ExpensesList items={filteredExpenses} />
    </Card>
  )
}

export default Expenses