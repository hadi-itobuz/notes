import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form/Form";
const Login = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState('User@123');
    const [email, setEmail] = useState('user@itobuz.com');
    const handleSubmit = (event) => {
        event.preventDefault();
        let data = JSON.stringify({
            "email": email,
            "password": password
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
                console.log(response.data);
                localStorage.clear();
                if (response.data.success === true) {
                    localStorage.setItem('accessToken', response.data.accessToken);
                    localStorage.setItem('refreshToken', response.data.refreshToken);
                    navigate('/home');
                }
                else console.log("Unable to login");
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const fields = [{ name: "Email", type: "email", val: email, setVal: setEmail },
    { name: 'Password', type: "password", val: password, setVal: setPassword }
    ]

    return (
        <Form fields={fields} handleSubmit={handleSubmit} />
    );
}
export default Login;