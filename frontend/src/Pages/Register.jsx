import axios from "axios";
import Form from "../components/Form/Form";
const Register = () => {
    const handleSubmit = (formData) => {
        let data = JSON.stringify({
            "name": formData.UserName,
            "email": formData.Email,
            "password": formData.Password
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/user/addUser',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                // console.log(JSON.stringify(response.data));
                if (response.status === 200) {
                    console.log('success :>> ');
                }
            })
            .catch((error) => {
                console.log(error);
            });

    };
    const fields = [{ name: "UserName", type: "text", val: 'hadi' },
    { name: "Email", type: "email", val: 'hadi@itobuz.com' },
    { name: 'Password', type: "password", val: 'User@123' }
    ]
    return (
        <Form fields={fields} onSubmit={handleSubmit} />
    );
}
export default Register;