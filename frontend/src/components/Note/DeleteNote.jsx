import PropTypes from 'prop-types';
import axiosInstance from '../../../axiosConfig';
import { setSearchOptionsContext } from '../NotesContainer';
import { useContext } from 'react';
const DeleteNote = ({ noteId }) => {
    const setSearchOptions=useContext(setSearchOptionsContext);
    const deleteNote =async () => {
        axiosInstance.delete(`/notes/deleteId/${noteId}`).then(res=>console.log('res :>> ', res))
        .catch((err)=>console.log('err :>> ', err))
    }
    const refreshDOM=()=>{
        setSearchOptions({//default search options
            pageNumber: 1,
            notePerPage: 4,
            sortBy: "title",
            order: 1,
            searchText: ""
        })
    }
    const onClick = () => {
        deleteNote().then(()=>refreshDOM())
    }
    return (
        <button onClick={onClick} className='px-5 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-red-500 hover:bg-red-700 focus:ring-red-800'>
            Delete
        </button>
    )
}
DeleteNote.propTypes = {
    noteId: PropTypes.string.isRequired,
};
export default DeleteNote;