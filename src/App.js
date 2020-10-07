import React from 'react';
import {} from 'react-router-dom'
// import AppRouter from './routers/AppRouter'
import Store from './components/playground/redux-expensify'

class App extends React.Component{
    render(){
        return (
            <Store/>
        )
    }
}
export default App;
