import Card from '../../Card/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './Expenses.css';
import { useState } from 'react';


function Expenses(props) {
    const {expenses} = props;
    const [filterYear, setFilterYear] = useState('2020')
    console.log(expenses)

    const onYearFilterChange = (year) =>{
        setFilterYear(year)
    }

    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear
    })

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filterYear} onYearFilterChange={onYearFilterChange} />
                {filteredExpenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount} />)}
            </Card>
        </div>
        
    )
}

export default Expenses;