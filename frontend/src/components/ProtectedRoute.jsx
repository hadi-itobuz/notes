import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom'
const isValid = async () => {
    return true;
}
const ProtectedRoute = () => {
    let [auth,setAuth] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setAuth(await isValid());
        };
        fetchData();
    }, [auth]);
    if(auth === null) return (<h1>Loading....</h1>)
    return (
        // console.log('auth :>> ', auth)
        auth ? <Outlet /> : <Navigate to='/' />
    )
}
export default ProtectedRoute;