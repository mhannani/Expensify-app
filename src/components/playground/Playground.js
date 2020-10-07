// Redux
import {createStore} from 'redux'
import React from 'react'
// import {v4 as uuid4} from "uuid";

const Store = ()=>{
    const store = createStore((state = {count: 0},  action) => {
        console.log('running ...');
        switch (action.type) {
            case 'INCREMENT':
                console.log('incrementing ...');
                return {
                    count: state.count + action.incrementBy
                }
            case 'DECREMENT':
                console.log('decrementing ...');
                return {
                    count: state.count - 1
                }
            case 'RESET':
                console.log('resetting ...')
                return {
                    count: 0
                }
            default:
                console.log('do nothing')
        }
    });
    store.subscribe(()=>{
        console.log('State has been changed ...')
    });
    const unsubscribe = store.subscribe(()=>{
        console.log('Unsubscribing ...')
    })
    unsubscribe();
    store.dispatch({ // sends action to the state
       //Increment
       type: 'INCREMENT',
        incrementBy:2
    });

    store.dispatch({
        //Resetting
        type: 'RESET',
    })
    store.dispatch({ // sends action to the state
        //Decrement
        type: 'DECREMENT',
        decrementBy : 5
    });

    return (
        <h1>HELLO</h1>
    );

}


export default Store;