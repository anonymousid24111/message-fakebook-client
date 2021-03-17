import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import isLogin from 'functions/isLogin'

const PrivateRoute = ({ component: Component, path }) => (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
        path={path}
        render={() => (isLogin() ? <Component /> : <Redirect to="/login" />)}
    />
)

PrivateRoute.propTypes = {
    component: PropTypes.node.isRequired,
    path: PropTypes.string.isRequired,
}

export default PrivateRoute
