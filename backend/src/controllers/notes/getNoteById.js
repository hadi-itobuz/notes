import Note from "../../models/note.js";
const getById = async (req, res) => {
    const id = req.params.id;
    try {
        const note = await Note.findById(id);
        if (note) {
            res.status(200).send({
                success: true,
                note
            })
        } else {
            res.status(404).send({
                success: false,
                message: "Note not found"
            })
        }
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Can't get note"
        })
    }
}
export default getById;