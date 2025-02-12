import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axiosConfig";
import toast from "react-hot-toast";
const LogoutBtn = () => {
    const navigate=useNavigate();
    const logout=()=>{
        axiosInstance.get('/user/logout')
        .then(()=>{
            toast.success("Successfully logged out");
            localStorage.clear();
            navigate('/')
        })
        .catch(()=>toast.error("couldn't logout"))
    }
    return (
        <button onClick={logout} type="button" className="focus:outline-none text-white focus:ring-4  font-medium rounded-full text-sm py-2 px-5  bg-red-600 hover:bg-red-700 focus:ring-red-900">
            Logout
        </button>
    )
}
export default LogoutBtn;