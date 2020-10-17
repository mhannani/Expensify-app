import React from 'react'
import {connect} from "react-redux"
import {startLogin} from '../actions/auth'
class LogInSignIn extends React.Component{
    render() {
        return (
            <div className="container-fluid jumbotron vertical-center">
                <div className="container">
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className={'form-control'} placeholder={'mohamed.hanani2019@gmail.com'}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className={'form-control'} placeholder={'password'}/>
                        </div>

                        <button onClick={this.props.startLogin} className="form-group btn-info" type="button">connect with google</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch)=>({
    startLogin: ()=> dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LogInSignIn);