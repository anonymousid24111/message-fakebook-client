import React from 'react'
import { useAuth } from '../hooks/useAuth';
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component, ...rest }) => {
    let auth = useAuth();
    // console.log("auth", auth)
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.user ? (
                    component
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}

export default PrivateRoute
