import PropTypes from 'prop-types';
const NotePagenaton = ({ searchOptions, setSearchOptions }) => {
    const { notePerPage, sortBy, order, searchText } = searchOptions;
    let { pageNumber } = searchOptions;
    const onClick = (num) => {
        pageNumber += num;
        if (pageNumber > 0)
            setSearchOptions({
                notePerPage, sortBy, order, searchText, pageNumber
            });
    }
    return (

        <div className="flex">
            <button onClick={() => onClick(-1)} className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Prev
            </button>
            <button onClick={() => onClick(1)} className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
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