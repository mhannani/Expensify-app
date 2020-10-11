import React from 'react'
// Higher Order Component  :  A component that renders a component/ or a couple of ones
//? functionalities
//TODO 1 :- Reuse code.
//TODO 2 :- Render Hijacking.
//TODO 3 :- Prop Manipulation.
//TODO 4 :- Abstract State.

const Info = (props)=>{
    return (
        <div>
            <h1> HOC : HIGH ORDER COMPONENTS</h1>
            <div>
                <h1>Info</h1>
                <p>The info is : {props.info}</p>
            </div>
        </div>
    );
}

const withAdminWarning = (WrappedComponent)=>{
    return (props)=>(
        <div>
            {props.isAdmin ?
                <p> You're admin : Here is the secret</p>
                :
                <p>You're not eligible </p>
            }
            <WrappedComponent {...props}/>
        </div>
    )
}

const RequireAuthentication = (WrappedComponent)=>{
    return (props)=>(
        <div>
            {props.authenticated && <p>Yo're authenticated ! You can now see you profile information</p>}
        </div>
    )
}
export const AdminInfo = withAdminWarning(Info)
export const AuthInfo = RequireAuthentication(Info)