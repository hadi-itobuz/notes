import User from "../../models/user.js"
import Note from "../../models/note.js"
const getInfo = async (req, res) => {
    try {
        const { userId } = req.body;
        if (!userId) {
            res.status(404).send({ success: false, message: "Unable to get user info" });
            return;
        }
        const user =await User.findById(userId);
        const noteCount =await Note.countDocuments({ userId });
        res.send({
            success: true,
            userInfo: {
                name: user.name, email: user.email, noteCount
            }
        })

    } catch (err) {
        console.log('err :>> ', err);
        res.status(500).send({
            success: false,
            message: "couldn't get info"
        })
    }
}
export default getInfo;