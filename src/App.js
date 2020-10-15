import React from 'react';
// import configureStore from "./store/configureStore";
import AppRouter from './routers/AppRouter'
// import { Provider } from 'react-redux'
import './firebase/firebase'
// import './components/playground/promises'
// const store = configureStore();
class App extends React.Component{
    // constructor(props) {
    //     super(props);
    //     const state = {
    //         loading:true
    //     }
    // }

    render(){
        return (
            // <Provider store={store}>
                <AppRouter/>
            // </Provider>

        )
    }
}

export default App;
