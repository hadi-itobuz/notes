import LogoutBtn from "./LogoutBtn";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
const HomeHeader = () => {
    return (
        <div className="flex flex-col justify-center items-center">
        <header className="w-full">
            <nav className="border-gray-200 px-4 lg:px-6 py-2.5 bg-gray-800 flex justify-between items-center">
                <h2 className="text-2xl text-blue-200 font-bold">Notes App</h2>
                <Link className="text-white underline" to="/home">Home</Link>
                <Link className="text-white underline" to="/profile">Profile</Link>
                <LogoutBtn />
            </nav>
        </header>
        <Outlet/>
        </div>
    )
}
export default HomeHeader;