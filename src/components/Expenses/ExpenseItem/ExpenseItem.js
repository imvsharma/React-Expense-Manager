import React, {useState} from 'react';
import Card from '../../Card/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem (props) {
    const {date, amount} = props;
    const [title, setTitle] = useState(props.title)
    const onClick = () => {
        console.log("clicked")
        setTitle("Updated")
    }
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={date} />
                <div className='expense-item__description'>
                    <h2>{title}</h2>
                    <div className='expense-item__price'>{amount}</div>
                    <button onClick={onClick}>Click Me</button>
                </div>
            </Card>
        </li>
        
    )
}

export default ExpenseItem