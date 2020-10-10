//? ACTION GENERATOR FOR EXPENSES
//? =============================

import {v4 as uuidv4} from "uuid";
//! ADD_EXPENSE

export const addExpense = ({description='',note='',amount=0,createdAt=''}={})=>({
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
export const removeExpense = ({id})=>({
    id,
    type: 'REMOVE_EXPENSE',

})

//! EDIT_EXPENSE
export const editExpense = (id, updates)=>({
    id,
    type: 'EDIT_EXPENSE',
    updates,
})



