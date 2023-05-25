import { useState } from 'react';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import './NewExpense.css';


const NewExpense = (props) => {
    const [showExpenseForm, setShowExpenseForm] =useState(false)
    const onSubmitExpenseData = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log("expenseData ", expenseData)
        props.onAddExpenseData(expenseData)
    }

    const addNewExpenseHandler = () => {
        setShowExpenseForm(true)
    }

    const hideNewExpenseHandler = () => {
        setShowExpenseForm(false)
    }

    return(
        <div className='new-expense'>
            { showExpenseForm && <ExpenseForm hideNewExpenseHandler={hideNewExpenseHandler} onSubmitExpenseData={onSubmitExpenseData} />}
            { !showExpenseForm && <button onClick={addNewExpenseHandler} >Add New Expense</button>}
        </div>
    )
}

export default NewExpense;
