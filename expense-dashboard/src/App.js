import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
    { title: 'Groceries', amount: 200.67, date: new Date(2021, 2, 20) },
    { title: 'Rent', amount: 394.67, date: new Date(2021, 2, 15) },
    { title: 'Misc.', amount: 24.67, date: new Date(2021, 2, 2) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem expense={expenses[0]}></ExpenseItem>
      <ExpenseItem expense={expenses[1]}></ExpenseItem>
      <ExpenseItem expense={expenses[2]}></ExpenseItem>
      <ExpenseItem expense={expenses[3]}></ExpenseItem>
    </div>
  );
}

export default App;
