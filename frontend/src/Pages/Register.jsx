import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from "../components/Form/Form";
import { userRegistrationSchema } from "../helper/validation";
import { useNavigate } from "react-router-dom";
const Register = () => {
    // Toasts
    const notifySuccess = (message) => toast.success(message);
    const notifyError = (message) => toast.error(message);
    const notifyWarn = message => toast.warn(message);

    const navigate = useNavigate();

    const handleSubmit = (formData) => {
        let data = {
            "name": formData.UserName,
            "email": formData.Email,
            "password": formData.Password
        }

        const sendRegistrationRequest = () => {
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'http://localhost:3000/user/addUser',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(data)
            };

            axios.request(config)
                .then((response) => {
                    if (response.status === 200) {
                        notifySuccess("User Registered successfully");
                        notifyWarn("Please verify yourself an email has been sent to you");
                    }
                })
                .catch((error) => {
                    if (error.response.status === 409) notifyError("User already exists, use alternate email ID");
                    else if (error.response.status === 400)
                        error.response.data.details.forEach(error => {
                            notifyError(error.message);
                        });
                    else if(error.status===429) notifyError("Too many attempts, try again after 5mins");
                    else notifyError("Something went wrong")
                })
        }

        const valid = userRegistrationSchema.safeParse(data);
        if (valid.success) sendRegistrationRequest();//data validation
        else valid.error.errors.forEach(err => {
            notifyError(err.message);
        });

    };
    const fields = [//to generate form by mapping fields to components
        { name: "UserName", type: "text", val: 'hadi' },
        { name: "Email", type: "email", val: 'hadi@itobuz.com' },
        { name: 'Password', type: "password", val: 'User@123' }
    ]
    return (
        <div className="flex flex-col items-center">
            <Form fields={fields} onSubmit={handleSubmit} />
            <ToastContainer theme="dark" />
            <button onClick={()=>navigate('/login')} className="text-blue-700 underline mx-auto">Already have an account, Signin</button>

        </div>
    );
}
export default Register;