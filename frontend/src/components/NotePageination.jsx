import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NotePagenaton = ({ searchOptions, setSearchOptions, notes }) => {
    useEffect(() => {
        if(notes.length===0 && pageNumber!==1){
            console.log(' Last page:>> ');
            setSearchOptions({ notePerPage, sortBy, order, searchText, pageNumber:pageNumber-1 });
            notifyWarn("This is the last page")
        }
      }, [notes]);
    const { notePerPage, sortBy, order, searchText } = searchOptions;
    let { pageNumber } = searchOptions;
    const notifyWarn = message => toast.warn(message);
    const onClick = (num) => {
        if(pageNumber === 1 && num === -1){
            notifyWarn("No Previous Page")
        }
        else {//not making page number negative
            pageNumber += num;
            setSearchOptions({ notePerPage, sortBy, order, searchText, pageNumber });
        }
    }
    return (

        <div className="flex">
            <button onClick={() => onClick(-1)} className="flex items-center justify-center px-4 h-10 text-base font-medium  rounded-s bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">
                Prev
            </button>
            <button onClick={() => onClick(1)} className="flex items-center justify-center px-4 h-10 text-base font-medium border-0 border-s rounded-e  bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">
                Next
            </button>
            <ToastContainer theme="dark" />
        </div>
    )
}
NotePagenaton.propTypes = {
    searchOptions: PropTypes.object.isRequired,
    setSearchOptions: PropTypes.func.isRequired,
    notes: PropTypes.array.isRequired
}
export default NotePagenaton;