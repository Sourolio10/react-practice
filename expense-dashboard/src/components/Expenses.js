import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from './Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
  const [filteredYear, selfFilteredYear] = useState('2020');
  const [filterInfoText, setfFilterInfoText] = useState('2019, 2021 & 2022')
  const filterChangeHandler = selectedYear =>{
    selfFilteredYear(selectedYear);
    if (selectedYear === '2019'){
      setfFilterInfoText('2020, 2021 & 2022')
    }
    else if (selectedYear === '2021'){
      setfFilterInfoText('2019, 2020 & 2022')
    }
    else{
      setfFilterInfoText('2019, 2020 & 2021')
    }
};

  return (

    <div>
   

    <Card className="expenses">
    <ExpensesFilter selected = {filteredYear} onChangeFilter={filterChangeHandler}/>
      <p>Data for years {filterInfoText} is hidden.</p>
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
    </div>
  );
}

export default Expenses;