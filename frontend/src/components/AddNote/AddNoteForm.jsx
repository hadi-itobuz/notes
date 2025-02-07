import { useForm } from "react-hook-form";
import axiosInstance from "../../../axiosConfig";
import { useContext } from "react";
import { setSearchOptionsContext } from "../NotesContainer";
const AddNoteForm = () => {
    const setSearchOptions = useContext(setSearchOptionsContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        axiosInstance.post('/notes/add', data)
            .then(res => console.log('res :>> ', res))
            .then(() => {
                setSearchOptions({//default search options
                    pageNumber: 1,
                    notePerPage: 4,
                    sortBy: "createdOn",
                    order: -1,
                    searchText: ""
                })
            })
        reset();
    }

    return (
        <form className="p-4 md:p-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 mb-4">
                <div className="col-span-1">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input  {...register("title", { required: true })} type="text" id="name" className="text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500" placeholder="Type product name" required={true} />
                    {errors.title && <span className="p-2 text-red-600">* This field is required</span>}

                </div>
                <div className="col-span-1">
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-white">Product Description</label>
                    <textarea {...register("body", { required: true })} id="description" rows="4" className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border  dark:bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Write product description here"></textarea>
                    {errors.body && <span className="p-2 text-red-600">This field is required</span>}
                </div>
            </div>
            <button type="submit" className="text-white inline-flex items-cente focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                Add new Note
            </button>
        </form>
    )
}
export default AddNoteForm;