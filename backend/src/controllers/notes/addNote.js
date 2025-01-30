import Note from "../../models/note.js";
const addNote = async (req, res) => {
    const { userId, title, body } = req.body;
    try {
        const note = new Note({ userId, title, body });
        await note.save();
        res.status(201).send({
            success: true,
            message: "New note Created",
            noteId: note._id
        })
    } catch (err) {
        console.log('err :>> ', err);
        res.status(400).send({
            success: false,
            message: "Unable to create note"
        })
    }
}
export default addNote;