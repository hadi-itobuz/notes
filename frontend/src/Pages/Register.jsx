import { useState } from "react";
import axios from "axios";
import Form from "../components/Form/Form";
const Register = () => {
    const [userName, setUserName] = useState('User')
    const [email, setEmail] = useState('hadi@itobuz.com');
    const [password, setPassword] = useState('User@123');
    const handleSubmit = () => {
        let data = JSON.stringify({
            "name": userName,
            "email": email,
            "password": password
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
                if(response.status===200){
                    console.log('success :>> ');
                }
            })
            .catch((error) => {
                console.log(error);
            });

    };
    const fields = [{ name: "User Name", type: "text", val: userName, setVal: setUserName }, { name: "Email", type: "email", val: email, setVal: setEmail },
    { name: 'Password', type: "password", val: password, setVal: setPassword }
    ]
    return (
        <Form fields={fields} handleSubmit={handleSubmit} />
    );
}
export default Register;