import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        require: true
    },
    isVerified: {
        type: Boolean,
        required: true,
        default: false
    },
    isLoggedIn: {
        type: Boolean,
        required: true,
        default: false
    }
})

const User = mongoose.model("User", userSchema);
export default User;