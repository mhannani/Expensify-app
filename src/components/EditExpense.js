import React from "react";
import ExpenseForm from "./ExpenseForm";
import {connect} from "react-redux";
import {editExpense} from "../actions/expenses";
const EditExpense = (props) =>{
    return (
        <ExpenseForm
            expense = {props.expense}
            onSubmit={(expense) => {
                props.dispatch(editExpense(props.match.params.id, expense))
                props.history.push('/')
            }}
        />
    );
}

const mapStateToProps = (state, props)=>{
    return {
        expense: state.expenses.find((expense)=> expense.id === props.match.params.id)
    }

}
export default connect(mapStateToProps)(EditExpense);