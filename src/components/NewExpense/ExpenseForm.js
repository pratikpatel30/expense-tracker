
import React from "react";

import './ExpenseForm.css';

const ExpenseForm = ()=> {
    return (
        <form action="">
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" name="" id="" />
                </div>
                <div className="new-expense__control">
                    <label>Amont</label>
                    <input type="number" min="0.01" step="0.01" name="" id="" />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" name="" id="" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;