import Session from "../models/session.js";
const isLoggedIn = async (req, res, next) => {
    try {
        const { userId } = req.body;
        const session = await Session.findOne({userId});
        if (session) next();
        else {
            res.status(404).send({
                success: false,
                message: "Session not found:User is logged out"
            });
        }
    } catch (err) {
        console.log('err :>> ', err);
        res.status(500).send({
            success: false,
            message: "Internal Error"
        });
    }
}
export default isLoggedIn;