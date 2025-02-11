import PropTypes from 'prop-types';
import { useEffect } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import toast, { Toaster } from 'react-hot-toast';

const NotePagination = ({ searchOptions, setSearchOptions, notes }) => {
    const notifyWarn = message => toast.error(message);
    useEffect(() => {
        if (notes.length === 0 && pageNumber !== 1) {
            setSearchOptions({ notePerPage, sortBy, order, searchText, pageNumber: pageNumber - 1 });
            notifyWarn("Last Page")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [notes]);

    const { notePerPage, sortBy, order, searchText } = searchOptions;
    let { pageNumber } = searchOptions;

    const onClick = (num) => {
        if (pageNumber === 1 && num === -1) {
            notifyWarn("No previous page")
        }
        else {//not making page number negative
            pageNumber += num;
            setSearchOptions({ notePerPage, sortBy, order, searchText, pageNumber });
        }
    }
    return (
        <>
            <div className="flex">
                <button onClick={() => onClick(-1)} className="flex items-center justify-center px-4 h-10 text-base font-medium  rounded-s bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">
                    Prev
                </button>
                <button onClick={() => onClick(1)} className="flex items-center justify-center px-4 h-10 text-base font-medium border-0 border-s rounded-e  bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">
                    Next
                </button>
            </div>
            <Toaster toastOptions={{
                error: {
                    style: {
                        background: 'black',
                        color:'white'
                    },
                },
                iconTheme: {
                    primary: 'yellow',
                    secondary: '#000',
                  },
                
            }} />
        </>
    )
}
NotePagination.propTypes = {
    searchOptions: PropTypes.object.isRequired,
    setSearchOptions: PropTypes.func.isRequired,
    notes: PropTypes.array.isRequired
}
export default NotePagination;