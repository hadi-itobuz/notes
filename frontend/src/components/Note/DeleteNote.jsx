import PropTypes from 'prop-types';
import ConfirmationModal from '../ConfirmationModal';
import { useState } from 'react';
import { setSearchOptionsContext } from '../NotesContainer';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import axiosInstance from '../../../axiosConfig';

const DeleteNote = ({ noteId }) => {
    const [modal, setModal] = useState(false);
    const setSearchOptions = useContext(setSearchOptionsContext);
    
    const deleteAndRender = (noteId) => {
        const deleteNote = async () => {
            axiosInstance.delete(`/notes/deleteId/${noteId}`).then(() => toast.success("Note deleted"))
                .catch((err) => {
                    console.log('err :>> ', err)
                    toast.error("Unable to delete note")
                })
        }
        const refreshDOM = () => {
            setSearchOptions({//default search options
                pageNumber: 1,
                notePerPage: 4,
                sortBy: "title",
                order: 1,
                searchText: ""
            })
        }
        deleteNote().then(() => refreshDOM())
    }

    return (
        <>
            <button onClick={() => setModal(!modal)} className='px-5 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-red-500 hover:bg-red-700 focus:ring-red-800'>
                Delete
            </button>
            {modal && <ConfirmationModal noteId={noteId} setModal={setModal} onClick={deleteAndRender} message='Delete Note' />}
        </>
    )
}

DeleteNote.propTypes = {
    noteId: PropTypes.string.isRequired,
};
export default DeleteNote;