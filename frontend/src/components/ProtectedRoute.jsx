import { Navigate, Outlet } from 'react-router-dom'
const ProtectedRoute = () => {
    const login=true;
    return (
        login ? <Outlet /> : <Navigate to='/' />//if user isn't logged in going to Login
    )
}

export default ProtectedRoute;