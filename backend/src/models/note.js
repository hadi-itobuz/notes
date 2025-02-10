import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
    userId: {//to connect with user
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        require: true
    },
    createdOn: {
        type: Date,
        required: true,
        default: Date.now//current date and time
    },
    modifiedOn: {
        type: Date,
        required: true,
        default: Date.now
    },
    fileName: {
        type: String
    }
})
const Note = mongoose.model("Note", notesSchema);
export default Note;