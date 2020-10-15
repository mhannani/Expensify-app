//? ACTION GENERATOR FOR EXPENSES
//? =============================

//import {v4 as uuidv4} from "uuid";
import moment from "moment";
import database from '../firebase/firebase'
//! ADD_EXPENSE

export const addExpense = (expense)=>({
    type: 'ADD_EXPENSE',
    expense
})


export const startAddExpense = (expenseData = {})=>{
    return (dispatch)=>{
        const {
            description='',
            note='',
            amount=0,
            createdAt=''
        } = expenseData
        const expense =  {description, note, amount, createdAt:moment(createdAt).format('LL')}
        database.ref('expenses/').push(expense).then((ref)=>{
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
}
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

//! SET_EXPENSE

export const setExpenses = (expenses)=>({
    type: 'SET_EXPENSES',
    expenses

})
export const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value').then((snapshot) => {
            const expenses = [];

            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setExpenses(expenses));
        });
    };
};

export const startRemoveExpense = ({id} = {})=>{
    return (dispatch)=>{
        return database.ref(`expenses/${id}`).remove().then(
            ()=>{
                dispatch(removeExpense({id}))
            }
        )
    }
}

