import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axiosConfig";
import toast from "react-hot-toast";
import ConfirmationModal from './ConfirmationModal';
import { useState } from "react";
const LogoutBtn = () => {
    const [modal, setModal] = useState(false);
    const navigate = useNavigate();
    const logout = () => {
        axiosInstance.get('/user/logout')
            .then(() => {
                toast.success("Successfully logged out");
                localStorage.clear();
                navigate('/')
            })
            .catch(() => toast.error("couldn't logout"))
    }
    return (
        <>
            <button onClick={()=>setModal(true)} type="button" className="focus:outline-none text-white focus:ring-4  font-medium rounded-full text-sm py-2 px-5  bg-red-600 hover:bg-red-700 focus:ring-red-900">
                Logout
            </button>
            {modal && <ConfirmationModal setModal={setModal} onClick={logout} message="Logout" />}
        </>
    )
}
export default LogoutBtn;