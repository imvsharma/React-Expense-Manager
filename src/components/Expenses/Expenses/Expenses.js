import Card from '../../Card/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import './Expenses.css';
import { useState } from 'react';
import ExpenseList from '../ExpenseList/ExpenseList';


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
                <ExpenseList filteredExpenses = {filteredExpenses} />
            </Card>
        </div>
        
    )
}

export default Expenses;