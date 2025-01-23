import Note from "../models/note.js";

//function to add new note
const addNote = async (req, res) => {
    const { userId, title, body } = req.body;
    try {
        const note = new Note({ userId, title, body });
        await note.save();
        res.status(200).send({
            success: true,
            message: "New note Created"
        })
    } catch (err) {
        console.log('err :>> ', err);
        res.status(400).send({
            success: false,
            message: "Unable to create note"
        })
    }
}
//function to get all notes
const getAll = async (req, res) => {
    const { userId } = req.body;
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


export { addNote, getAll };