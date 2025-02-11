// import axiosInstance from "../../../axiosConfig";
import axios from "axios";
import { useForm } from "react-hook-form";
import FormData from 'form-data'
import PropTypes from 'prop-types';
function getExtension(file) {
    const filename = file.name;
    return filename.split('.')[1]
}
function UploadFile({ id }) {
    const { register, handleSubmit } = useForm();
    const uploadFile = (formData) => {
        let data = new FormData();
        // console.log('getExtension(formData.file[0]) :>> ', getExtension(formData.file[0]));
        const extension = getExtension(formData.file[0])
        if (!['jpg', 'jpeg', 'png', 'gif', 'svg'].includes(extension)) {
            console.log('Invalid file format :>> ');
            return;
        }

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
        <div className="flex flex-col sm:flex-row gap-2 my-2">
            <input
                type="file" {...register("file")}
                className="w-full text-gray-500 font-medium text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-green-600 file:hover:bg-green-700 file:text-white rounded"
            />
            <button onClick={handleSubmit(uploadFile)}
                className="max-w-40 px-6 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-green-600 hover:bg-green-700 focus:ring-green-800">
                Upload
            </button>
        </div>
    );
}

UploadFile.propTypes = {
    id: PropTypes.string.isRequired
}

export default UploadFile;
