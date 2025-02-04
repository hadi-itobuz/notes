import { useState } from "react";
import Note from "./Note";
import NotesContainerHeader from "./NoteContainerHeader";
import { useEffect } from "react";
import instance from "../../axiosConfig";

const NotesContainer = () => {
    const [notes, setNotes] = useState(null);
    const updateNotes = async () => {
        console.log('Updating :>> ', );
        const res = await instance.get('/notes/getAll')
        console.log('res.data.notes :>> ', res.data.notes);
        setNotes(res.data.notes);
    }
    useEffect(() => {
        setNotes(null);
        console.log('Mount :>> ');
        return () => {
            console.log('dismount :>> ');
            updateNotes()
        }
    },[]);

    const [searchField, setSearchField] = useState('');
    return (

        <div className="container p-3">
            <h1>NOTES...</h1>
            <NotesContainerHeader searchField={searchField} setSearchField={setSearchField} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {(notes) ? notes.map(note => (<Note key={note._id} note={note} />)) : <h1>Loading.....</h1>}
            </div>
        </div>
    )
}
export default NotesContainer;