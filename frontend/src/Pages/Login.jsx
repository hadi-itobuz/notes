import axios from "axios";
import Form from "../components/Form/Form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import hottoast from "react-hot-toast";

const Login = () => {
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
                    hottoast.success('Successfully logged in');
                }
                else console.log("Unable to login");
            })
            .catch((error) => {
                console.log('error :>> ', error);
                if (error.response.data.details)
                    error.response.data.details.forEach(error => {
                        notifyError(error.message);
                    });
                else if(error.status===429) notifyError("Too many attempts, try again after 5mins");
                else notifyError(error.response.data.message);
            })
    };

    const fields = [
        { name: "Email", type: "email", val: 'user@itobuz.com' },
        { name: 'Password', type: "password", val: 'User@123' }
    ]

    return (
        <div className="flex flex-col items-center">
            <Form fields={fields} onSubmit={handleSubmit} />
            <ToastContainer theme="dark" />
            <button onClick={()=>navigate('/register')} className="text-blue-700 underline mx-auto">Don&apos;t have an account, Register</button>
        </div>
    );
}

export default Login;