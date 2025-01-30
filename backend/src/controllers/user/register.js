import User from "../../models/user.js";
import sendEmail from "../../helper/sendVerificationEmail.js";
import bcrypt from 'bcryptjs';

const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const isVerified = false;
        const oldUser = await User.findOne({ email: email });
        if (oldUser && oldUser.isVerified) {
            res.status(400).send({
                success: false,
                message: "User already present"
            })
        } else {
            const user = new User({ name, email, password: bcrypt.hashSync(password, 10), isVerified })
            user.save();
            const token = sendEmail("hadi@itobuz.com", user._id);
            res.status(200).send({
                success: true,
                message: "User registred, Verification email sent",
            });
        }
    } catch (error) {
        console.log('error :>> ', error);
        res.status(500).send({
            success: false,
            message: "Couldn't register"
        })
    }
    //fetching user data


}
//verifying user 
const verifyUser = async (req, res) => {
    User.findByIdAndUpdate(req.body.userId,
        { $set: { isVerified: 'true', token: null } },
        { new: true }
    )
        .then(res.status(200).send({
            message: "Email verification Successfull",
            success: true
        }))
        .catch(err => res.status(400).send({
            success: false,
            message: "Couldn't verify token"
        }))
}

export { createUser, verifyUser };