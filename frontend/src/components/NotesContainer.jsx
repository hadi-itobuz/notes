import { useState } from "react";
import Note from "./Note";
import NotesContainerHeader from "./NoteContainerHeader";
import { useEffect, useRef } from "react";
import instance from "../../axiosConfig";
import NotePagenaton from "./NotePageination";

const NotesContainer = () => {
    const [notes, setNotes] = useState(null);
    const [searchOptions, setSearchOptions] = useState({
        pageNumber: 1,
        notePerPage: 4,
        sortBy: "title",
        order: 1,
        searchText: ""
    })
    const previousState = useRef(searchOptions)
    useEffect(() => {
        const updateNotes = async () => {
            const res = await instance.post('/notes/', searchOptions)
            if (res.data.notes.length > 0) {
                previousState.current = searchOptions;//saving valid states
                setNotes(res.data.notes);
            } else {
                setSearchOptions(previousState.current);
            }
        }
        updateNotes();
    }, [searchOptions]);

    return (
        <div className="container p-3">
            <h1>NOTES...</h1>
            <NotesContainerHeader setSearchOptions={setSearchOptions} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-5">
                {(notes) ? notes.map(note => (<Note key={note._id} note={note} />)) : <h1>Loading.....</h1>}
            </div>
            <NotePagenaton setSearchOptions={setSearchOptions} searchOptions={searchOptions} />
        </div>
    )
}


export default NotesContainer;
