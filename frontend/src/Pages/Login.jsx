import axios from "axios";
import Form from "../components/Form/Form";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = ({ setLogin }) => {
    const notifyError = (message) => toast.error(message);
    const navigate = useNavigate();
    const handleSubmit = (formData) => {
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
                    localStorage.setItem('accessToken', response.data.accessToken);
                    localStorage.setItem('refreshToken', response.data.refreshToken);
                    navigate('/home')
                    setLogin(true);
                }
                else console.log("Unable to login");
            })
            .catch((error) => {
                // notifyError(error.response.data.message)
                if(error.response.data.details){
                    error.response.data.details.forEach(error => {
                        notifyError(error.message);
                    });
                }else{
                    notifyError(error.response.data.message);
                }
            })
    };

    const fields = [{ name: "Email", type: "email", val: 'user@itobuz.com' },
    { name: 'Password', type: "password", val: 'User@123' }
    ]

    return (
        <>
            <Form fields={fields} onSubmit={handleSubmit} />
            <ToastContainer theme="dark" />
        </>
    );
}

Login.propTypes = {
    setLogin: PropTypes.func.isRequired
}
export default Login;