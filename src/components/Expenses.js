import './Expenses.css'
import ExpenseItem from './ExpenseItem'

function Expenses(prors){
  return (
    <div className='expenses'>
      <ExpenseItem
        date={prors.items[0].date}
        title={prors.items[0].title}
        amount={prors.items[0].amount}
      />
      <ExpenseItem
        date={prors.items[1].date}
        title={prors.items[1].title}
        amount={prors.items[1].amount}
      />
      <ExpenseItem
        date={prors.items[2].date}
        title={prors.items[2].title}
        amount={prors.items[2].amount}
      />
      <ExpenseItem
        date={prors.items[3].date}
        title={prors.items[3].title}
        amount={prors.items[3].amount}
      />
    </div>
  )
}

export default Expenses