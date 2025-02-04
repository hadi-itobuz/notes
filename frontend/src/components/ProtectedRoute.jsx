import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom'
const isValid = async () => {
    try {
        const token = localStorage.getItem('accessToken')
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };
        let auth = false;
        const response = await fetch("http://localhost:3000/user/isValid", requestOptions)
        auth = await response.json();
        auth = auth.success;
        if (auth === true) return true;
        return false;
    } catch (err) {
        console.log('err :>> ', err);
        return false;
    }
}

const ProtectedRoute = () => {
    let [auth,setAuth] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setAuth(await isValid());
        };
        fetchData();
    }, [auth]);
    // const auth=true;

    if(auth === null) return (
        <h1>Loading....</h1>
    )
    return (
        // console.log('auth :>> ', auth)
        auth ? <Outlet /> : <Navigate to='/' />
    )
}
export default ProtectedRoute;