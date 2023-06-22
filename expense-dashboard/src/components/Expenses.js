import React, { useState } from 'react';
import './Expenses.css';
import Card from './Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
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
    
      <ExpensesList items = {filteredExpenses}/>
    </Card>
    </div>
  );
}

export default Expenses;