// import axiosInstance from "../../../axiosConfig";
import axios from "axios";
import { useForm } from "react-hook-form";
import FormData from 'form-data'
import PropTypes from 'prop-types';

function UploadFile({ id }) {
    const { register, handleSubmit } = useForm();
    const uploadFile = (formData) => {
        let data = new FormData();
        data.append('filename', formData.file[0])

        let config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: `http://localhost:3000/notes/upload/${id}`,
            data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                'Content-Type': 'multipart/form-data',
            }
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <div className="file-upload">
                <input type="file" {...register("file")} />
                <button onClick={handleSubmit(uploadFile)} className="upbutton">
                    Upload
                </button>
            </div>
        </div>
    );
}

UploadFile.propTypes = {
    id: PropTypes.string.isRequired
}

export default UploadFile;
