import axios from "axios";
import Form from "../components/Form/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types"
const Login = ({setLogin}) => {
    const [err,setErr]=useState(null);
    const navigate=useNavigate();
    const handleSubmit = (formData) => {
        console.log('formData :>> ', formData);
        let data = JSON.stringify({
            "email": formData.Email,
            "password": formData.Password
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/user/login',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                if (response.data.success === true) {
                    setLogin(true);
                    console.log('login :>> ', true);
                    localStorage.setItem('accessToken', response.data.accessToken);
                    localStorage.setItem('refreshToken', response.data.refreshToken);
                    navigate('/home')
                    // window.location.href = '/home';
                }
                else console.log("Unable to login");
            })
            .catch((error) => {
                console.log('error :>> ', error);
                console.log(' :>> ',error.response.data.message );
                setErr(error.response.data.message)
            }).finally(()=>console.log('err :>> ', err))
    };

    const fields = [{ name: "Email", type: "email", val: 'user@itobuz.com' },
    { name: 'Password', type: "password", val: 'User@123' }
    ]

    return (
        <Form fields={fields} onSubmit={handleSubmit} />
    );
}

Login.propTypes = {
    setLogin: PropTypes.func.isRequired
}
export default Login;