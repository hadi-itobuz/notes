import HomeHeader from "../components/HomeHeader";
import NotesContainer from "../components/NotesContainer";
const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <HomeHeader/>
            <NotesContainer/>
        </div>
    )
}
export default Home;