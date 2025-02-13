import { useEffect, useState } from "react";
import axiosInstance from "../../axiosConfig";
import { toast } from "react-toastify";

const Profile = () => {
    const [user, setUser] = useState({ name: "", email: "", noteCount: 0 })
    useEffect(() => {
        axiosInstance.get('/user/info')
            .then(res => {
                setUser(res.data.userInfo)
            })
            .catch(() => {
                toast.error("Something went wrong");
            })
    })
    return (
        <div className="flex justify-center items-center w-full my-10 p-5">
            <div className="p-8 border-4 border-white rounded-lg bg-gray-800">
                <p className="text-4xl text-white"><strong className="text-gray-300 font-normal">User Name:</strong> {user.name}</p>
                <p className="text-4xl text-white"><strong className="text-gray-300 font-normal">User Email Id:</strong> {user.email} </p>
                <p className="text-4xl text-white"><strong className="text-gray-300 font-normal">Number of Notes:</strong> {user.noteCount} </p>
            </div>
        </div>
    )
}
export default Profile;