import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState('User2@123new');
    const [email, setEmail] = useState('user2@itobuz.com');
    const handleSubmit = (event) => {
        event.preventDefault();
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "email": email,
            "password": password
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("http://localhost:3000/user/login", requestOptions)
            .then((response) => response.json())
            .then((res) => {
                console.log('result :>> ', res);
                // let uniqueID = JSON.parse(localStorage.getItem("uid")) || 0;
                localStorage.setItem('accessToken',res.accessToken);
                localStorage.setItem('refreshToken',res.refreshToken);
                if(res.success===true) {
                    navigate('home');
                }
                else console.log("Unable to login");
            })
            .catch((error) => console.error(error));
    };

    return (
        <Card color="transparent" className="p-5" shadow={false}>
            <Typography variant="h4" color="blue-gray">
            user2@itobuz.com
            User2@123new
                Login
            </Typography>
            <form className=" mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
                <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Email
                    </Typography>
                    <Input
                        type="email"
                        value={email} onChange={(e) => setEmail(e.target.value)}
                        size="lg"
                        placeholder="name@mail.com"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />

                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Password
                    </Typography>
                    <Input

                        type="password"
                        value={password} onChange={(e) => setPassword(e.target.value)}
                        size="lg"
                        placeholder="********"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                </div>
                <Button className="mt-6" type="submit" value="Submit" fullWidth>
                    Login
                </Button>
            </form>
        </Card>
    );
}
export default Login;