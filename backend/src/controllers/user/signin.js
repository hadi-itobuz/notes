import bcrypt from 'bcryptjs';
import User from '../../models/user.js';
import Session from '../../models/session.js';
import generateToken from '../../helper/genrateToken.js';


const verifyCredential = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email })
        if (user.isVerified && bcrypt.compareSync(password, user.password)) {//if user is verified and has correct password
            const refreshToken = generateToken('refreshToken', user._id, '2h');
            await Session.deleteMany({ userId: user._id });//deleting old sessions
            const session = new Session({ userId: user._id, refreshToken });//new session
            session.save();

            res.status(200).send({
                success: true,
                message: "successfully logged in",
                accessToken: generateToken('accessToken', user._id, '5h'),
                refreshToken
            })
        } else {
            if (!bcrypt.compareSync(password, user.password)) {
                res.status(401).send({
                    success: false,
                    message: "Unable to login: Incorrect Credentials",
                });
            } else if (!user.isVerified) {
                res.status(403).send({
                    success: false,
                    message: "Unable to login: User not verified",
                });
            } else {
                res.status(400).send({
                    success: false,
                    message: "Unable to login",
                });
            }
        }
    } catch (error) {
        console.log('err :>> ', error);
        res.status(500).send("Unable to fetch user")
    }
}

export { verifyCredential };