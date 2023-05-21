import './App.css';
import Expenses from './components/Expenses/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense/NewExpense';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2023, 3, 28)
    },
    {
      id: 'e2',
      title: 'Toilet Paper',
      amount: 94.67,
      date: new Date(2023, 5, 2)
    },
    {
      id: 'e3',
      title: 'New Desk',
      amount: 294.67,
      date: new Date(2023, 1, 21)
    },
    {
      id: 'e4',
      title: 'Laptop',
      amount: 799.67,
      date: new Date(2023, 3, 19)
    }
  ]

  const addExpenseData = expense => {
    console.log("In App.js")
    console.log(expense)
  }
  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseData} />
      <Expenses expenses= {expenses} />
    </div>
  );
}

export default App;
