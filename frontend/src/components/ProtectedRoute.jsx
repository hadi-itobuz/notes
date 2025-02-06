import { Navigate, Outlet } from 'react-router-dom'
import { useEffect } from 'react';
const ProtectedRoute = ({login}) => {
    useEffect(() => {
        console.log('login :>> ', login);
      }, [login]);
    return (
        login ? <Outlet /> : <Navigate to='/' />
    )
}
export default ProtectedRoute;