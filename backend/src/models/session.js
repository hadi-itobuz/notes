import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})
const Session = mongoose.model("Session", sessionSchema);
export default Session;