import Session from "../../models/session";
const logout = async (req, res) => {
    const { userId } = req.body;
    try {
        const session = await Session.findOneAndDelete({ userId });
        res.status(200).send({
            success: true,
            mesage: "session was sucessfully terminated"
        })
    } catch (err) {
        res.send({
            success: false,
            mesage: "Unable to delete session"
        })
    }
}
export default logout;