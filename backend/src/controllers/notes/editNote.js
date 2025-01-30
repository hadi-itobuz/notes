import Note from "../../models/note.js";
const editNote = async (req, res) => {
    const id = req.params.id;
    const { title, body } = req.body;
    try {
        await Note.findByIdAndUpdate(id, { title, body }, { new: true });
        res.status(201).send({
            success: true,
            message: "Note edited"
        })
    } catch (err) {
        console.log('err :>> ', err);
        res.status(400).send({
            success: false,
            message: "Unable to edit note"
        })
    }
}
export default editNote;