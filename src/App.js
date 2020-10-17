import React from 'react';
import AppRouter from './routers/AppRouter'
import {firebase} from './firebase/firebase'

class App extends React.Component{
    render(){
        return (
            <AppRouter/>

        )
    }
}

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        console.log('logged in');
    }else{
        console.log('logged out');
    }
})

export default App;
