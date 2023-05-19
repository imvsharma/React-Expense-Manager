import './App.css';
import Expenses from './components/Expenses/Expenses';

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
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses= {expenses} />
    </div>
  );
}

export default App;
