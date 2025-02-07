import PropTypes from 'prop-types';

const Note = ({ note }) => {
    return (
        <div className="flex flex-col p-6 border w-fullh border-gray-200 rounded-lg shadow-sm bg-gray-800 dark:border-gray-700">
            {/* Title */}
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{note.title}</h5>
            {/* Body */}
            <p className="mb-3 h-28 overflow-scroll font-normal text-gray-200">{note.body}</p>
            {/* Footer: created on + edit button */}
            <p className='text-gray-400'>{note.createdOn}</p>
            <div className='flex justify-self-stretch justify-between align-baseline'>
                <a href="#" className="inline-flex items-center mt-2 px-6 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                    Edit
                </a>
            </div>
        </div>
    );

}
Note.propTypes = {
    note: PropTypes.object,
};
export default Note;