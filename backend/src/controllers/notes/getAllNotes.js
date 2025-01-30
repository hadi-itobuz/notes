import Note from "../../models/note.js";
const getAll = async (req, res) => {
    const userId = req.body.userId;
    try {
        const notes = await Note.find({ userId: userId });
        res.status(200).send({
            success: true,
            message: "Notes retrived",
            notes
        })
    } catch (err) {
        console.log('err :>> ', err);
        res.status(500).send({
            success: false,
            message: "Unable to get notes"
        })
    }
}
export default getAll;