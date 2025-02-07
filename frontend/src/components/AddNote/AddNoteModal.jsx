import PropTypes from 'prop-types';
const AddNoteModal = ({ setVisibility }) => {
    return(
        <div id="crud-modal" tabIndex="-1" className="overflow-y-auto overflow-x-hidden fixed left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full" >
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative rounded-lg shadow-sm bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600">
                        <h3 className="text-lg font-semibold text-white">
                            Create New Note
                        </h3>
                        <button onClick={() => { setVisibility('hidden') }} type="button" className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white" data-modal-toggle="crud-modal">
                            <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                        </button>
                    </div>
                    <form className="p-4 md:p-5">
                        <div className="grid gap-4 mb-4">
                            <div className="col-span-1">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                <input type="text" name="name" id="name" className="text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500" placeholder="Type product name" required="" />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-white">Product Description</label>
                                <textarea id="description" rows="4" className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border  dark:bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Write product description here"></textarea>
                            </div>
                        </div>
                        <button type="submit" className="text-white inline-flex items-cente focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                            <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                            Add new Note
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
AddNoteModal.propTypes = {
    setVisibility: PropTypes.func.isRequired,
};
export default AddNoteModal;