import axios from "axios";
import { useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
const Verify = () => {
    const params = useParams();
    const navigate = useNavigate();
    const { token } = params;
    useEffect(() => {
        axios.get('http://localhost:3000/user/verify/' + token)
            .then(() => {
                toast.success("User verified successfully: Login");
                navigate('/')
            })
            .catch((err) => {
                toast.error(err.response.data.message);
                navigate('/register')
            })
    }, [token])
    return (<div className="text-4xl text-white text-center py-36">Loading.... </div>)
}
export default Verify;