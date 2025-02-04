import PropTypes from 'prop-types';
const Note = ({ note }) => {
    return (
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {note.title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{note.body}</p>
            <div className='flex justify-between align-baseline'>
                <p className='dark:text-white'>{note.createdOn}</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Edit
                </a>
            </div>

        </div>
    );

}
export default Note;
Note.propTypes = {
    note: PropTypes.object,
};