import React from "react";
import {NavLink, useLocation} from "react-router-dom";

const NoMatch = ()=>{
    const currentLocation = useLocation();
    return (
        <div className={'text-center'}>
            <h1>Sorry but we've trouble finding : {currentLocation.pathname}</h1>

            <NavLink to='/'>Go Home</NavLink>
        </div>
    )
}
export default NoMatch;