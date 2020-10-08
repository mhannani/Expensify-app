import React from 'react';
import {} from 'react-router-dom'
import configureStore from "./store/configureStore";
import AppRouter from './routers/AppRouter'
import Hoc from './components/playground/high_order_component';
import {addExpense, removeExpense} from './actions/expenses'
import {setTextFilter} from "./actions/filters";
import getVisibleExpenses from './selectors/expenses';
import { Provider } from 'react-redux'
// import {AuthInfo} from "./components/playground/high_order_component";

const store = configureStore();
store.dispatch(addExpense({
    description: 'Book',
    note: 'A note here 1',
    amount: 50, // To be changed to 300
    createdAt: 1000
}))
// store.subscribe(()=>{
//     console.log(store.getState());
// })
store.dispatch(addExpense({
    description: 'Novel',
    note: 'A note here 1',
    amount: 100, // To be changed to 300
    createdAt: 1991
}))
store.dispatch(addExpense({
    description: 'Machine Learning',
    note: 'A note here 1',
    amount: 5000, // To be changed to 300
    createdAt: 1992
}))
const add_1 = store.dispatch(addExpense({
    description: 'Business',
    note: 'A note here 1',
    amount: 200, // To be changed to 300
    createdAt: 1993
}))
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
class App extends React.Component{
    render(){
        return (
            <Provider store={store}>
                <AppRouter/>
            </Provider>
        )
    }
}

export default App;