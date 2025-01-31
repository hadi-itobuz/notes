import Session from "../../models/session.js";
const logout = async (req, res) => {
    const { userId } = req.body;
    try {
        await Session.deleteMany({ userId });//deleting sessions
        res.status(200).send({
            success: true,
            mesage: "session was sucessfully terminated"
        })
    } catch (err) {
        console.log('err :>> ', err);
        res.send({
            success: false,
            mesage: "Unable to delete session"
        })
    }
}
export default logout;