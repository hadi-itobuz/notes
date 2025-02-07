import { useState } from "react";
import Note from "./Note";
import NotesContainerHeader from "./NoteContainerHeader";
import { useEffect, useRef, createContext } from "react";
import axiosInstance from "../../axiosConfig";
import NotePagenaton from "./NotePageination";

export const setSearchOptionsContext = createContext(null);

const NotesContainer = () => {
    const [notes, setNotes] = useState(null);
    const [searchOptions, setSearchOptions] = useState({//default search options
        pageNumber: 1,
        notePerPage: 4,
        sortBy: "title",
        order: 1,
        searchText: ""
    })
    const previousState = useRef(searchOptions);//storing last state->if current state is empty replacing
    useEffect(() => {
        const updateNotes = async () => {
            const res = await axiosInstance.post('/notes/', searchOptions)
            if (res.data.notes.length > 0) {//if valid response
                previousState.current = searchOptions;//saving valid state
                setNotes(res.data.notes);//updating
            } else {
                setSearchOptions(previousState.current);//updating to previous state
            }
        }
        updateNotes();
    }, [searchOptions]);

    return (
        <setSearchOptionsContext.Provider value={setSearchOptions}>
            <div className="container p-3 flex flex-col items-center">
                <h1>NOTES...</h1>
                <NotesContainerHeader setSearchOptions={setSearchOptions} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-5">
                    {(notes) ? notes.map(note => (<Note key={note._id} note={note} />)) : <h1>Loading.....</h1>}
                </div>
                <NotePagenaton setSearchOptions={setSearchOptions} searchOptions={searchOptions} />
            </div>
        </setSearchOptionsContext.Provider>

    )
}


export default NotesContainer;