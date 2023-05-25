import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2020, 3, 28)
  },
  {
    id: 'e2',
    title: 'Toilet Paper',
    amount: 94.67,
    date: new Date(2021, 5, 2)
  },
  {
    id: 'e3',
    title: 'New Desk',
    amount: 294.67,
    date: new Date(2022, 1, 21)
  },
  {
    id: 'e4',
    title: 'Laptop',
    amount: 799.67,
    date: new Date(2023, 3, 19)
  },
  {
    id: 'e5',
    title: 'Car Insurance',
    amount: 29.67,
    date: new Date(2020, 4, 28)
  },
]

function App() {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseData = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }
  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseData} />
      <Expenses expenses= {expenses} />
    </div>
  );
}

export default App;
