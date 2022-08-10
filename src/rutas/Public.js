import React from "react";
import { Route, Navigate } from "react-router";
import { get } from "./token";

function PublicRoute({ component: Component, ...rest }) {
    return (
        <Route {...rest} 
        render={ (props) => !get() ? <Component {...props} /> : <Navigate to={{ pathname: '/usuarios/', state: { from: props.location } }} />} 
        />
    )
}

export default PublicRoute




