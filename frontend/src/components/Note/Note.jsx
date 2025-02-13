import PropTypes from 'prop-types';
import DeleteNote from './DeleteNote';
import EditNote from './EditNote';
import UploadFile from './UploadFile';
import { useEffect, useState } from 'react';
import axiosInstance from '../../../axiosConfig';
const Note = ({ note }) => {
    const [url, setUrl] = useState(null)
    const date = new Date(note.createdOn);
    useEffect(() => {
        axiosInstance.get(`http://localhost:3000/notes/getFile/${note._id}`)
            .then((res) => {
                if (res.status === 200) setUrl(`http://localhost:3000/notes/getFile/${note._id}`)
            })
            .catch(() => setUrl(null))
    }, [note._id, url])

    return (
        <div className="flex flex-col justify-between justify-self-stretch
 p-5 border overflow-scroll w-full rounded-lg shadow-sm bg-gray-800 border-gray-700">
            <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{note.title}</h5>
                <p className="mb-3 h-20 overflow-scroll font-normal text-gray-200">{note.body}</p>
                {url && <img className='text-white max-w-60' src={`${url}`} alt="No files attached" />}
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