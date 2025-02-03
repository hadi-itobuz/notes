// import { useEffect, useRef } from 'react';
import { Navigate, Outlet } from 'react-router-dom'
// const isValid = async () => {
//     try {
//         const token = localStorage.getItem('accessToken')
//         const myHeaders = new Headers();
//         myHeaders.append("Authorization", `Bearer ${token}`);

//         const requestOptions = {
//             method: "GET",
//             headers: myHeaders,
//             redirect: "follow"
//         };
//         let auth = false;
//         const response = await fetch("http://localhost:3000/user/isValid", requestOptions)
//         auth = await response.json();
//         auth = auth.success;
//         console.log('auth :>> ', auth);
//         if (auth === true) return true;
//         return false;
//     } catch (err) {
//         console.log('err :>> ', err);
//         return false;
//     }
// }

const ProtectedRoute = () => {
    // let auth = useRef(false);

    // useEffect(() => {
    //     console.log('Component mounted');
    //     const fetchData = async () => {
    //         auth.current = await isValid();
    //     };
    //     fetchData();
    //     return () => {
    //         console.log('Component unmounted');
    //     };
    // }, [auth]);
    const auth=true;
    return (
        // console.log('auth :>> ', auth)
        auth ? <Outlet /> : <Navigate to='/' />
    )
}
export default ProtectedRoute;