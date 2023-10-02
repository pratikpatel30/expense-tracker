
import './ExpenseItem.css'

function ExpenseItem(){
    return (
        <div className='expense-item'>
            <div>March 12th 2021</div>
            <div className='expense-item__description'>
                <h2>Car Insurence</h2>
            </div>
            <div className='expense-item__price'>$200</div>
        </div>
    )

}

export default ExpenseItem;