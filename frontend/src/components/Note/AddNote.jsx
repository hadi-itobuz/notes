import { useState } from "react";
import NoteModal from "./NoteModal";

const AddNote = () => {
    const [visibility, setVisibility] = useState(false);

    const type = {
        header: "Add",
        route: "/notes/add",
        defaultTitle: "",
        defaultBody: ""
    }
    
    return (
        <>
            <button onClick={()=>setVisibility(true)} data-modal-target="crud-modal" data-modal-toggle="crud-modal" className="block text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 my-2 py-3 md:py-0 w-36 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800" type="button">
                Add Note
            </button>
            {visibility && <NoteModal setVisibility={setVisibility} type={type} />}
        </>
    )
}
export default AddNote;