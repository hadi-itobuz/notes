import PropTypes from 'prop-types';
import DeleteNote from './DeleteNote';
import EditNote from './EditNote';

const Note = ({ note }) => {
    const date = new Date(note.createdOn)
    return (
        <div className="flex flex-col p-6 border w-fullh border-gray-200 rounded-lg shadow-sm bg-gray-800 dark:border-gray-700">
            {/* Title */}
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{note.title}</h5>
            {/* Body */}
            <p className="mb-3 h-28 overflow-scroll font-normal text-gray-200">{note.body}</p>
            {/* Footer: created on + edit button */}
            <p className='text-gray-400'>{date.toLocaleTimeString() + " ,  " + date.toDateString()} </p>
            <div className='flex justify-between mt-3'>
                <EditNote note={note} />
                <button className='px-5 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-green-600 hover:bg-green-700 focus:ring-green-800'>
                    Upload
                </button>
                <DeleteNote noteId={note._id} />
            </div>
        </div>
    );

}
Note.propTypes = {
    note: PropTypes.object,
};
export default Note;