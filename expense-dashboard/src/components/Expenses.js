import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from './Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
  const [filteredYear, selfFilteredYear] = useState('2020');
  let filterInfoText = '2019, 2021 & 2022';
  if (filteredYear === '2019'){
    filterInfoText ='2020, 2021 & 2022';
  }
  else if (filteredYear === '2021'){
    filterInfoText ='2019, 2020 & 2022';
  }
  else{
    filterInfoText ='2019, 2020 & 2021';
  }
  
  const filterChangeHandler = selectedYear =>{
    selfFilteredYear(selectedYear);
};

  return (

    <div>
   

    <Card className="expenses">
    <ExpensesFilter selected = {filteredYear} onChangeFilter={filterChangeHandler}/>
      <p>Data for years {filterInfoText} is hidden.</p>
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