import User from "../models/user.js";
import sendEmail from "../helper/sendVerificationEmail.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(5);
//creating new user
const createUser = async (req, res) => {
    //fetching user data
    const { name, email, password } = req.body;
    const isVerified = false;
    const token = sendEmail("hadi@itobuz.com");
    const oldUser = await User.findOne({ email: email });
    console.log('oldUser :>> ', oldUser);
    if (oldUser && oldUser.isVerified) {
        res.status(400).send({
            success: false,
            message: "User already present"
        })
    } else {
        //sending verification email
        const user = new User({ name, email, password: bcrypt.hashSync(password, salt), token, isVerified })
        user.save();
        res.status(200).send({
            success: true,
            message: "User registred, Verification email sent",
        });
    }

}
//verifying user 
const verifyUser = async (req, res) => {
    const { token } = req.params;
    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
        if (err) {
            console.log(err);
            res.status(400).send({
                message: "Email verification failed, possibly the link is invalid or expired",
                success: false
            });
        }
        else {
            User.findOneAndUpdate({ token: token },
                { $set: { isVerified: 'true', token: null } },
                { new: true }
            )
                .then(res.status(200).send({
                    message: "Email verification Successfull",
                    success: true
                }))
                .catch(err => res.status(400).send("Couldn't verify"))
        }
    });
}

export { createUser, verifyUser };