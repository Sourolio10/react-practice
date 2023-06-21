import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from './Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
  const [filteredYear, selfFilteredYear] = useState('2020');
  
  const filterChangeHandler = selectedYear =>{
    selfFilteredYear(selectedYear);
};

  return (

    <div>
   

    <Card className="expenses">
    <ExpensesFilter selected = {filteredYear} onChangeFilter={filterChangeHandler}/>

      {props.items.map(expense => 
      <ExpenseItem  
        title={expense.title}
        amount={expense.amount}
        date={expense.date}/>)}
    </Card>
    </div>
  );
}

export default Expenses;