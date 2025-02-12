import PropTypes from 'prop-types';
import DeleteNote from './DeleteNote';
import EditNote from './EditNote';
import UploadFile from './UploadFile';

const Note = ({ note }) => {
    const date = new Date(note.createdOn)
    return (
        <div className="flex flex-col justify-between p-6 border overflow-scroll w-full border-gray-200 rounded-lg shadow-sm bg-gray-800 dark:border-gray-700">
            {/* Title */}
            <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{note.title}</h5>
                {/* Body */}
                <p className="mb-3 h-28 overflow-scroll font-normal text-gray-200">{note.body}</p>
                <img className='text-white max-w-60' src={`http://localhost:3000/notes/getFile/${note._id}`} alt="No files attached" />
            </div>
            {/* Footer: created on + edit button */}
            <>
                <div>
                    <p className='text-gray-400'>{date.toLocaleTimeString() + " ,  " + date.toDateString()} </p>
                    <div className='flex justify-between mt-3'>
                        <EditNote note={note} />
                        <DeleteNote noteId={note._id} />
                    </div>
                    <UploadFile id={note._id} />
                </div>
            </>

        </div>
    );

}
Note.propTypes = {
    note: PropTypes.object,
};
export default Note;