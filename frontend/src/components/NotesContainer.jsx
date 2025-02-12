import { useState } from "react";
import Note from "./Note/Note";
import NotesContainerHeader from "./NoteContainerHeader";
import { useEffect, createContext } from "react";
import axiosInstance from "../../axiosConfig";
import NotePagination from "./NotePagination";


// eslint-disable-next-line react-refresh/only-export-components
export const setSearchOptionsContext = createContext();

const NotesContainer = () => {
    const [notes, setNotes] = useState([]);
    const [searchOptions, setSearchOptions] = useState({//default search options
        pageNumber: 1,
        notePerPage: 4,
        sortBy: "title",
        order: 1,
        searchText: ""
    })
    useEffect(() => {
        const updateNotes = async () => {
            const res = await axiosInstance.post('/notes/', searchOptions)
            setNotes(res.data.notes);//updating
        }
        updateNotes();
    }, [searchOptions]);

    return (
        <setSearchOptionsContext.Provider value={setSearchOptions}>
            <div className="container p-3 flex flex-col items-center">
                <NotesContainerHeader setSearchOptions={setSearchOptions} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5 w-full">
                    {(notes) ? notes.map(note => (<Note key={note._id} note={note} />)) : <h1>Loading.....</h1>}
                </div>
                <NotePagination setSearchOptions={setSearchOptions} searchOptions={searchOptions} notes={notes} />
            </div>
        </setSearchOptionsContext.Provider>
    )
}


export default NotesContainer;