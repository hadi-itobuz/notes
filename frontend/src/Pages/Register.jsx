import axios from "axios";
import { useState } from "react";
import Form from "../components/Form/Form";
// import Message from "../components/Message";
const Register = () => {
    const [errorMessage,setErrorMessage] = useState(null);
    const [success,setSuccess]=useState(false);
    const handleSubmit = (formData) => {
        let data = JSON.stringify({
            "name": formData.UserName,
            "email": formData.Email,
            "password": formData.Password
        });
        console.log('formdata :>> ', formData);
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
                if (response.status === 200) setSuccess(true);
            })
            .catch((error) => {
                console.log('error :>> ', error);
                if(error.response.status===409) setErrorMessage("User already exists, use alternate email ID");
                setSuccess(false)
            }).finally(()=>{
                console.log('errorMessage :>> ', errorMessage);
                console.log('success :>> ', success);
            })

    };
    const fields = [{ name: "UserName", type: "text", val: 'hadi' },
    { name: "Email", type: "email", val: 'hadi@itobuz.com' },
    { name: 'Password', type: "password", val: 'User@123' }
    ]
    return (
        <>
            <Form fields={fields} onSubmit={handleSubmit} />
            {/* {errorMessage && <Message message={errorMessage} color='red'/>} */}
            {/* {success &&<><Message message="User Registred Successfully" role={"danger"}/> <Message message="Please Verify your email" role="warn" /></> } */}
        </>
    );
}
export default Register;