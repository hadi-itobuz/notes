import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';

const NotePagination = ({ searchOptions, setSearchOptions, pageCount }) => {
    const notifyWarn = message => toast.error(message);
    const { notePerPage, sortBy, order, searchText } = searchOptions;
    let { pageNumber } = searchOptions;

    const onClick = (num) => {
        if (pageNumber === 1 && num === -1) //going prev from first page
            notifyWarn("No previous page");
        else if(pageNumber>=pageCount && num===+1)//going next from last page
            notifyWarn("Last Page");
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
                {/* PageNumber of PageCount */}
                <div className='text-gray-400 bg-gray-600 pr-3 flex items-center'><p className='text-2xl text-white px-3'>{pageNumber}</p> of {pageCount}</div>
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
    pageCount: PropTypes.number.isRequired
}
export default NotePagination;