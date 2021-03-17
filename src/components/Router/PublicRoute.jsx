import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import isLogin from 'functions/isLogin'
import PropTypes from 'prop-types'

const PublicRoute = ({ component: Component, restricted, exact, path }) => (
    <Route
        path={path}
        exact={exact}
        render={() =>
            isLogin() && restricted ? <Redirect to="/" /> : <Component />
        }
    />
)

PublicRoute.propTypes = {
    component: PropTypes.node.isRequired,
    restricted: PropTypes.bool.isRequired,
    path: PropTypes.string.isRequired,
    exact: PropTypes.bool.isRequired,
}

export default PublicRoute
