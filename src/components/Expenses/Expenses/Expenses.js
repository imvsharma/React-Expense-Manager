import Card from '../../Card/Card';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './Expenses.css';

function Expenses(props) {
    const {expenses} = props;

    return (
        <Card className='expenses'>
            <ExpenseItem title={expenses[0].title} date={expenses[0].date} amount={expenses[0].amount} />
            <ExpenseItem title={expenses[1].title} date={expenses[1].date} amount={expenses[1].amount} />
            <ExpenseItem title={expenses[2].title} date={expenses[2].date} amount={expenses[2].amount} />
            <ExpenseItem title={expenses[3].title} date={expenses[3].date} amount={expenses[3].amount} />
        </Card>
    )
}

export default Expenses;