import { Navigate, Outlet } from 'react-router-dom'
// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({login}) => {
    return (
        login ? <Outlet /> : <Navigate to='/' />
    )
}

export default ProtectedRoute;