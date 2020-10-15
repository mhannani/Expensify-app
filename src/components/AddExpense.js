import React from "react";
import ExpenseForm from "./ExpenseForm";
import {connect} from "react-redux";
import {startAddExpense} from "../actions/expenses";

export class AddExpense extends React.Component{
    render(){
        return (
            <div>
                <ExpenseForm
                    onSubmit={(expense) => {
                        this.props.startAddExpense(expense);
                        this.props.history.push('/');
                    }}
                />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=>({
    startAddExpense: (expenses)=>dispatch(startAddExpense(expenses))
})

export default connect(undefined, mapDispatchToProps)(AddExpense);