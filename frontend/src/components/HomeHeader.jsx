import LogoutBtn from "./LogoutBtn";

const HomeHeader = () => {
    return (
        <header className="w-full">
            <nav className="border-gray-200 px-4 lg:px-6 py-2.5 bg-gray-800 flex justify-between items-center">
                <h2 className="text-white">Home</h2>
                <LogoutBtn/>
            </nav>
        </header>
    )
}
export default HomeHeader;