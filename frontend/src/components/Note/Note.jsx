import PropTypes from 'prop-types';
import DeleteNote from './DeleteNote';
import EditNote from './EditNote';
import UploadFile from './UploadFile';
import { useState } from 'react';
const Note = ({ note }) => {
    const [url,setUrl]=useState(null)
    const date = new Date(note.createdOn);
    
    return (
        <div className="flex flex-col justify-between p-6 border overflow-scroll w-full border-gray-200 rounded-lg shadow-sm bg-gray-800 dark:border-gray-700 max-h-fit">
            <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{note.title}</h5>
                <p className="mb-3 h-28 overflow-scroll font-normal text-gray-200">{note.body}</p>
                <img className='text-white max-w-60' src={`${url}`} alt="No files attached" />
            </div>
            <div>
                <p className='text-gray-400'>{date.toLocaleTimeString() + " ,  " + date.toDateString()} </p>
                <div className='flex justify-between mt-3'>
                    <EditNote note={note} />
                    <DeleteNote noteId={note._id} />
                </div>
                <UploadFile id={note._id} setUrl={setUrl} />
            </div>

        </div>
    );

}
Note.propTypes = {
    note: PropTypes.object,
};
export default Note;