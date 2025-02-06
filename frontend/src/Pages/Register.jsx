import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from "../components/Form/Form";
import { userRegistrationSchema } from "../helper/validation";
const Register = () => {
    // Toasts
    const notifySuccess = (message) => toast.success(message);
    const notifyError = (message) => toast.error(message);
    const notfyWarn = message => toast.warn(message);

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
                        notifySuccess("User Registred successfully");
                        notfyWarn("Please verify yourself an email has been sent to you");
                    }
                })
                .catch((error) => {
                    if (error.response.status === 409) notifyError("User already exists, use alternate email ID");
                    else if (error.response.status === 400)
                        error.response.data.details.forEach(error => {
                            notifyError(error.message);
                        });
                })
        }
        const valid = userRegistrationSchema.safeParse(data);
        if (valid.success) sendRegistrationRequest();//data validation
        else valid.error.errors.forEach(err => {
            notifyError(err.message);
        });

    };
    const fields = [
        { name: "UserName", type: "text", val: 'hadi' },
        { name: "Email", type: "email", val: 'hadi@itobuz.com' },
        { name: 'Password', type: "password", val: 'User@123' }
    ]
    return (
        <>
            <Form fields={fields} onSubmit={handleSubmit} />
            <ToastContainer theme="dark" />
        </>
    );
}
export default Register;