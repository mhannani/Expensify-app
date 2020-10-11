import React from 'react';
import {createStore, combineReducers} from 'redux';
import { v4 as uuidv4 } from 'uuid';
//! ADD_EXPENSE
const addExpense = ({description='',note='',amount=0,createdAt=''}={})=>({
    type: 'ADD_EXPENSE',
    expense:{
        id: uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
})
//! REMOVE_EXPENSE
const removeExpense = (id)=>({
    id ,
   type: 'REMOVE_EXPENSE',

})
//! EDIT_EXPENSE
const editExpense = (id, updates)=>({
    id,
    type: 'EDIT_EXPENSE',
    updates,
})


//! Expenses Reducer :
const expensesInitialState = [];
const ExpensesReducer = (state = expensesInitialState, action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter((id)=> action.id !== id);
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id === action.id){
                    return {
                        ...state,
                        ...action.updates
                    }
                }
                return state;
            });
        default:
            return state;
    }
}


//! SET_TEXT_FILTER
const setTextFilter = (text)=>({
    text,
    type:'SET_TEXT_FILTER',
});

//! SORT_BY_AMOUNT

const sortByAmount = ()=>({
    type: 'SORT_BY_AMOUNT'
})

//! SORT_BY_DATE

const sortByDate = ()=>({
    type: 'SORT_BY_DATE'
})

//! SET_START_DATE

const setStartDate = (value)=>({
    type: 'SET_START_DATE',
    value
})

//! SET_END_DATE

const setEndDate = (value)=>({
    type: 'SET_END_DATE',
    value
})

//! Filter reducer
const filterInitialState = {
    text: '',
    sortBy: 'date',
    createdAt: undefined,
    startDate: undefined,
    endDate: undefined
};
const FilterReducer = (state = filterInitialState, action)=>{
    switch (action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return{
                state,
                sortBy: 'date'
            }
        case 'SET_END_DATE':

            return action.value !== undefined ?{
                state,
                endDate: action.value
            } :
            {
                state,
                startDate: undefined
            }
        case 'SET_START_DATE':
            return action.value !== undefined ? {
                state,
                startDate: action.value
            }:
            {
                state,
                startDate: undefined
            }
        default :
            return state;
    }
}

//! Expenses store creation

const store = createStore(combineReducers({
    expenses: ExpensesReducer,
    filters: FilterReducer,
}));
const Store = ()=>{
    // const state = {
    //     expenses:[{
    //         id:'ID',
    //         description: 'expense description',
    //         note: 'This a note about the expense',
    //         amount: 1000,
    //         createdAt: 0
    //     }],
    //     filters:{
    //         text: 'rent',
    //         sortBy: 'amount', // or date
    //         startDate: undefined,
    //         endDate: undefined
    //     }
    // }
    return(
        <h1>Redux - Expensify</h1>
    )
}
//! Get filtered expenses
const getFilteredExpenses = (expenses, {text, sortBy, startDate, endDate} = {})=>{
    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b)=>{
        if (sortBy === 'date'){
            // Array will be sorted by date
            return a.createdAt > b.createdAt ? -1 : 1;
        }
        if(sortBy === 'amount'){
            return a.amount > b.amount ? -1 : 1;
        }
    });
}
store.subscribe(()=>{
    const state = store.getState();
    console.log(state)
    const visibleExpenses = getFilteredExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
})

const adding_1 = store.dispatch(addExpense({
    description: 'description 1',
    note: 'A note here 1',
    amount: 1000, // To be changed to 300
    createdAt: 1995
}))

store.dispatch(addExpense({
    description: 'description 2',
    note: 'A note here 2',
    amount: 10002,
    createdAt: 21995
}))





store.dispatch(removeExpense(adding_1.expense.id))
// store.dispatch(setTextFilter('rent'))
// store.dispatch(sortByAmount())
// store.dispatch(sortByDate())
// store.dispatch(setEndDate('00-00-2020'))
// store.dispatch(setStartDate('00-00-1995'))
// store.dispatch(setStartDate())

// store.dispatch(editExpense(adding_1.expense.id, {description: '300000000'}))
export default Store;