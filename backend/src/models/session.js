import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
    userId: {//to connect with user
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    refreshToken:{
        type:String,
        required:true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})
const Session = mongoose.model("Session", sessionSchema);
export default Session;