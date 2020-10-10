import React from 'react';
import configureStore from "./store/configureStore";
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux'
const store = configureStore();
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
