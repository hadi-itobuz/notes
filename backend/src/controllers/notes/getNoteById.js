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
                message: "note not found"
            })
        }
    } catch (err) {
        console.log('err :>> ', err);
        res.status(500).send({
            success: false,
            message: "can't get note"
        })
    }
}
export default getById;