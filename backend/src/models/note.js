import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
    userId: {
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
        default: Date.now
    },
    file: {
        type: String
    }
})
const Note = mongoose.model("Note", notesSchema);
export default Note;