import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {//already hashed
        type: String,
        require: true
    },
    isVerified: {//email verification
        type: Boolean,
        required: true,
        default: false
    }
})

const User = mongoose.model("User", userSchema);
export default User;