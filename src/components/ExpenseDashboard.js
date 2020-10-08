import React from "react";
import ConnectedExpenseList from "./ExpensesList";
import ExpenseListFilters from "./ExpenseListFilters";

const ExpenseDashboard = () => {
    return (
        <div className={'center_IT'}>
            <ExpenseListFilters/>
            <ConnectedExpenseList/>
        </div>
    );
}
export default ExpenseDashboard;