import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
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

        // <Card color="transparent" className="p-5" shadow={false}>
        //     <form className=" mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
        //         <div className="mb-1 flex flex-col gap-6">
        //             <Typography variant="h6" color="blue-gray" className="-mb-3">
        //                 Email
        //             </Typography>
        //             <Input
        //                 type="email"
        //                 value={email} onChange={(e) => setEmail(e.target.value)}
        //                 size="lg"
        //                 placeholder="name@mail.com"
        //                 className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
        //                 labelProps={{
        //                     className: "before:content-none after:content-none",
        //                 }}
        //             />

        //             <Typography variant="h6" color="blue-gray" className="-mb-3">
        //                 Password
        //             </Typography>
        //             <Input

        //                 type="password"
        //                 value={password} onChange={(e) => setPassword(e.target.value)}
        //                 size="lg"
        //                 placeholder="********"
        //                 className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
        //                 labelProps={{
        //                     className: "before:content-none after:content-none",
        //                 }}
        //             />
        //         </div>
        //         <Button className="mt-6 bg-black p-2" type="submit" value="Submit" fullWidth>
        //             Login
        //         </Button>
        //     </form>
        // </Card>
    );
}
export default Login;