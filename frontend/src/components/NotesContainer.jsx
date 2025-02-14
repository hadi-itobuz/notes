import { useState } from "react";
import Note from "./Note/Note";
import NotesContainerHeader from "./NoteContainerHeader";
import { useEffect, createContext } from "react";
import axiosInstance from "../../axiosConfig";
import NotePagination from "./NotePagination";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const setSearchOptionsContext = createContext();

const NotesContainer = () => {
    const navigate = useNavigate();
    const [notes, setNotes] = useState([]);
    const [pageCount, setPageCount] = useState(1);
    const [searchOptions, setSearchOptions] = useState({//default search options
        pageNumber: 1,
        notePerPage: 4,
        sortBy: "title",
        order: 1,
        searchText: ""
    })

    useEffect(() => {
        const updateNotes = async () => {
            axiosInstance.post('/notes/', searchOptions)
                .then(res => {
                    setNotes(res.data.notes);
                    setPageCount(res.data.pageCount);
                })//updating notes when search Options change
                .catch(err => {
                    if (err.response.status === 401) navigate('/login')
                })
        }
        updateNotes();
    }, [searchOptions, navigate]);

    return (
        <setSearchOptionsContext.Provider value={setSearchOptions}>
            <div className="container p-3 flex flex-col items-center">
                <NotesContainerHeader setSearchOptions={setSearchOptions} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-5 w-full">{/*Mapping Notes*/}
                    {(notes) ? notes.map(note => (<Note key={note._id} note={note} />)) : <h1>Loading.....</h1>}
                </div>
                <NotePagination setSearchOptions={setSearchOptions} searchOptions={searchOptions} pageCount={pageCount} />
            </div>
        </setSearchOptionsContext.Provider>
    )
}

export default NotesContainer;