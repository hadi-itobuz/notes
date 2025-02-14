import { useState } from "react";
import NoteModal from "./NoteModal";
import PropTypes from "prop-types"

const EditNote = ({ note }) => {

    const [visibility, setVisibility] = useState(false);

    const onClick = () => {
        setVisibility(true);
    }

    const type = {
        header: "Edit",
        route: `/notes/edit/${note._id}`,
        defaultTitle: note.title,
        defaultBody: note.body
    }

    return (
        <>
            <button onClick={onClick} data-modal-target="crud-modal" data-modal-toggle="crud-modal"
                className="px-6 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800" type="button">
                Edit
            </button>
            {visibility && <NoteModal setVisibility={setVisibility} type={type} />}
        </>
    )
}

EditNote.propTypes = {
    note: PropTypes.object.isRequired
}
export default EditNote;