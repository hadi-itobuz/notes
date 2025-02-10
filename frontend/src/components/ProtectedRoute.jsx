import { Navigate, Outlet } from 'react-router-dom'
// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ login }) => {
    return (
        login ? <Outlet /> : <Navigate to='/' />//if user isn't logged in going to Login
    )
}

export default ProtectedRoute;