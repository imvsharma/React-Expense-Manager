import ExpenseForm from '../ExpenseForm/ExpenseForm';
import './NewExpense.css';


const NewExpense = (props) => {
    const onSubmitExpenseData = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log("expenseData ", expenseData)
        props.onAddExpenseData(expenseData)
    }
    return(
        <div className='new-expense'>
            <ExpenseForm onSubmitExpenseData={onSubmitExpenseData} />
        </div>
    )
}

export default NewExpense
