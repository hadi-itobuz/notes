import PropTypes from 'prop-types';
const NotePagenaton = ({ searchOptions, setSearchOptions }) => {
    const { notePerPage, sortBy, order, searchText } = searchOptions;
    let { pageNumber } = searchOptions;
    const onClick = (num) => {
        if (!(pageNumber === 1 && num===-1)){//not making page number negative
            pageNumber += num;
            setSearchOptions({notePerPage, sortBy, order, searchText, pageNumber});
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
        </div>
    )
}
NotePagenaton.propTypes = {
    searchOptions: PropTypes.object.isRequired,
    setSearchOptions: PropTypes.func.isRequired
}
export default NotePagenaton;