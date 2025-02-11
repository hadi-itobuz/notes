import Note from "../../models/note.js";
const addNote = async (req, res) => {
    const { userId, title, body } = req.body;
    try {
        if (await Note.findOne({ userId, title })) {//if note with same title already exists
            res.status(400).send({
                success: false,
                message: "unable to create note: duplicate title"
            })
        } else {
            const note = new Note({ userId, title, body });
            await note.save();
            res.status(201).send({
                success: true,
                message: "new note Created",
                noteId: note._id
            })
        }
    } catch (err) {
        console.log('err :>> ', err);
        res.status(400).send({
            success: false,
            message: "unable to create note"
        })
    }
}
export default addNote;