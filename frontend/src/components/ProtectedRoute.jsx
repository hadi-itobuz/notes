import { Navigate, Outlet } from 'react-router-dom'
const ProtectedRoute = () => {
    const login=true;
    return (
        login ? <Outlet /> : <Navigate to='/login' />//if user isn't logged in going to Login
    )
}

export default ProtectedRoute;