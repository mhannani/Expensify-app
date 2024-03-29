import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props)=>(
    <div className={'expenses-wrapper'}>
        <div className={'row'}>
            {props.expenses.map((expense) => {
                return <ExpenseListItem key={expense.id} {...expense} />;
            })}
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);
