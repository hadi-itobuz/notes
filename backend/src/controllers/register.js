import User from "../models/user.js";
import sendEmail from "../helper/sendVerificationEmail.js";
import jwt from 'jsonwebtoken'
//creating new user
const createUser = (req, res) => {
    //fetching user data
    const { name, email, password } = req.body;
    const isVerified = false;
    const token = sendEmail("hadi@itobuz.com");
    //sending verification email
    const user = new User({ name, email, password, token, isVerified })
    user.save();
    res.status(200).send("Email sent");
}
//verifying user 
const verifyUser = async (req, res) => {
    const { token } = req.params;
    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
        if (err) {
            console.log(err);
            res.send("Email verification failed, possibly the link is invalid or expired");
        }
        else {
            User.findOneAndUpdate({ token: token },
                { $set: { isVerified: 'true', token: null } },
                { new: true }
            )
                .then(res.status(200).send("Email verifified successfully"))
                .catch(err => res.status(400).send("Couldn't verify"))
        }
    });
}

export { createUser, verifyUser };