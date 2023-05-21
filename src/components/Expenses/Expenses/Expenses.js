import Card from '../../Card/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './Expenses.css';
import { useState } from 'react';


function Expenses(props) {
    const {expenses} = props;
    const [filterYear, setFilterYear] = useState('2020')

    const onYearFilterChange = (year) =>{
        console.log(year)
        setFilterYear(year)
    }

    return (
        <div>
            
            <Card className='expenses'>
                <ExpensesFilter selected={filterYear} onYearFilterChange={onYearFilterChange} />
                <ExpenseItem title={expenses[0].title} date={expenses[0].date} amount={expenses[0].amount} />
                <ExpenseItem title={expenses[1].title} date={expenses[1].date} amount={expenses[1].amount} />
                <ExpenseItem title={expenses[2].title} date={expenses[2].date} amount={expenses[2].amount} />
                <ExpenseItem title={expenses[3].title} date={expenses[3].date} amount={expenses[3].amount} />
            </Card>
        </div>
        
    )
}

export default Expenses;