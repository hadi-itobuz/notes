import PropTypes from 'prop-types';
import AddNoteForm from './AddNoteForm';
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
                    <AddNoteForm/>
                </div>
            </div>
        </div>
    )
}
AddNoteModal.propTypes = {
    setVisibility: PropTypes.func.isRequired,
};
export default AddNoteModal;