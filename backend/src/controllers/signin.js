import bcrypt from 'bcryptjs';
import User from '../models/user.js';

const verifyCredential = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email })
        if (user.isVerified && bcrypt.compareSync(password, user.password)) {
            user.isLoggedIn = true;
            user.save();
            res.status(200).send({
                success: true,
                message: "successfully logged in",
                id: user._id
            })
        } else {
            if (!bcrypt.compareSync(password, user.password)) {
                res.status(401).send({
                    success: false,
                    message: "Unable to login: Incorrect password",
                });
            } else if (!user.isVerified) {
                res.status(403).send({
                    success: false,
                    message: "Unable to login: User not verified",
                });
            }
            res.status(400).send({
                success: false,
                message: "Unable to login",
            });
        }
    } catch (error) {
        res.status(500).send("Unable to fetch user")
    }
}

export { verifyCredential };