import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';
const NotesContainerHeader = ({ setSearchOptions }) => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (formData) => {
        const pageNumber = 1;
        const notePerPage = 4;
        const searchText = formData.searchText;
        const sortBy = formData.sortBy.split(' ')[0];
        const order = formData.sortBy.split(' ')[1] ? -1 : 1;
        setSearchOptions({ pageNumber, notePerPage, sortBy, order, searchText })
        reset();
    }
    return (
        <>
            <form className="mx-auto my-2" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex">
                    <select id="sortBy" {...register("sortBy")} className="shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center rounded-s-lg  bg-gray-700 hover:bg-gray-600 text-white border-gray-600" name="sortBy" >
                        <option value="title">Title</option>
                        <option value="title r">Title-Reverse</option>
                        <option value="createdOn">Date</option>
                        <option value="createdOn r">Date-Reverse</option>
                    </select>
                    <div className="relative w-full">
                        <input type="search" id="searchText" defaultValue="" {...register("searchText")} className="block p-2.5 w-full z-20 text-lg rounded-e-lg border-s-2 border focus:ring-blue-500  bg-gray-700 border-s-gray-700  border-gray-600 placeholder-gray-400 text-white focus:border-blue-500" placeholder="Search Notes..." />
                        <button type="submit" className="absolute top-0 end-0 px-5 text-sm font-medium h-full text-white rounded-e-lg border border-blue-700  focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </div>
                </div>
            </form>


        </>
    )
}

NotesContainerHeader.propTypes = {
    setSearchOptions: PropTypes.func.isRequired
}

export default NotesContainerHeader;



