import Note from "../../models/note.js";
const getAll = async (req, res) => {
    const userId = req.body.userId;
    try {
        const notes = await Note.find({ userId: userId });//getting all notes pertaining to the user id
        res.status(200).send({
            success: true,
            message: "notes retrieved",
            notes
        })
    } catch (err) {
        console.log('err :>> ', err);
        res.status(500).send({
            success: false,
            message: "unable to get notes"
        })
    }
}
export default getAll;