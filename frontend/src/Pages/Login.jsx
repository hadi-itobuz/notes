import axios from "axios";
import Form from "../components/Form/Form";
const Login = () => {
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
                    localStorage.setItem('accessToken', response.data.accessToken);
                    localStorage.setItem('refreshToken', response.data.refreshToken);
                    // navigate('/home');
                    window.location.href = '/home';
                }
                else console.log("Unable to login");
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const fields = [{ name: "Email", type: "email", val: 'user@itobuz.com' },
    { name: 'Password', type: "password", val: 'User@123' }
    ]

    return (
        <Form fields={fields} onSubmit={handleSubmit} />
    );
}
export default Login;