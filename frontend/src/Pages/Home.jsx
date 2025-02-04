import NotesContainer from "../components/NotesContainer";
const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <header className="text-3xl">Home Page</header>
            <NotesContainer/>
        </div>
    )
}
export default Home;