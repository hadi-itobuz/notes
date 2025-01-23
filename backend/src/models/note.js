import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
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
    }
})
const Note = mongoose.model("Note", notesSchema);
export default Note;