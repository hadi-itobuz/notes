import { useState } from "react";
import Note from "./Note";
import NotesContainerHeader from "./NoteContainerHeader";
import { useEffect } from "react";
import instance from "../../axiosConfig";

const NotesContainer = () => {
    const [notes, setNotes] = useState(null);
    const [searchOptions, setSearchOptions] = useState({
        pageNumber: 1,
        notePerPage: 4,
        order: 1,
        searchText: ""
    })
    const updateNotes = async () => {
        console.log('Updating :>> ',);
        // const res = await instance.get('/notes/getAll')
        const res= await instance.post('/notes/',searchOptions)
        console.log('res.data.notes :>> ', res);
        setNotes(res.data.notes);
    }
    useEffect(() => {
        setNotes(null);
        return () => {
            updateNotes()
        }
    }, [searchOptions]);

    return (

        <div className="container p-3">
            <h1>NOTES...</h1>
            <NotesContainerHeader searchOptions={searchOptions} setSearchOptions={setSearchOptions} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {(notes) ? notes.map(note => (<Note key={note._id} note={note} />)) : <h1>Loading.....</h1>}
            </div>
        </div>
    )
}
export default NotesContainer;





// let config = {
//   data : data
// };

// axios.request(config)
// .then((response) => {
//   console.log(JSON.stringify(response.data));
// })
// .catch((error) => {
//   console.log(error);
// });
