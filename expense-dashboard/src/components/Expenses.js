import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from './Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
  const [filteredYear, selfFilteredYear] = useState('2023');
  
  const filterChangeHandler = selectedYear =>{
    selfFilteredYear(selectedYear);
};

  const filteredExpenses = props.items.filter(
    expense => {
      return expense.date.getFullYear().toString() === filteredYear;
    }
  )

  return (

    <div>
   

    <Card className="expenses">
    <ExpensesFilter selected = {filteredYear} onChangeFilter={filterChangeHandler}/>
    {filteredExpenses.length === 0 ? <p>No expenses found.</p> : filteredExpenses.map((expense) => (
      <ExpenseItem
        key = {expense.id}  
        title={expense.title}
        amount={expense.amount}
        date={expense.date}/>))}
      
    </Card>
    </div>
  );
}

export default Expenses;