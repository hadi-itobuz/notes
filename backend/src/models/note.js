import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
    ownerID: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required:true
    },
    body:{
        type:String,
        require:true
    },
    isDone:{
        type:Boolean,
        require:true,
        default:false
    },
    createdOn:{
        type:Date,
        required:true,
        default:date.now
    }
})
const Note= mongoose.model("Note",notesSchema);
export default Note;