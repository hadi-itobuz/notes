import Note from "../models/note.js";
import User from "../models/user.js"
const isLoggedIn = async (req, res, next) => {
    try {
        const { userId } = req.body;
        const user = await User.findById(userId);
        if (user.isLoggedIn) {
            next();
        } else {
            res.status(404).send({
                success: false,
                message: "User is logged out"
            })
        }
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Unable to find user"
        })
    }
}
export default isLoggedIn;