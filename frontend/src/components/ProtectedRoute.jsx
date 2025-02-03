import PropTypes from 'prop-types';
import { Route, Navigate } from 'react-router-dom';

export default function ProtectedRoute({ Component, ...rest }) {
    const isAuthenticated = true;
    return (
        <Route {...rest}>
            {isAuthenticated ? <Component /> : <Navigate to="/" />}
        </Route>
    );
}
ProtectedRoute.propTypes = {
    Component: PropTypes.element
}