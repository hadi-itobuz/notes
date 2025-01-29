import bcrypt from 'bcryptjs';
import User from '../models/user.js';
import Session from '../models/session.js';
import generateToken from '../helper/genrateToken.js';


const verifyCredential = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email })
        if (user.isVerified && bcrypt.compareSync(password, user.password)) {
            //genrate session
            const session=await new Session({userId:user._id});
            session.save();
            res.status(200).send({
                success: true,
                message: "successfully logged in",
                id: user._id,
                token: generateToken(user._id)
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