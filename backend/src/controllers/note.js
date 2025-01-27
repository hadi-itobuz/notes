import Note from "../models/note.js";
import User from "../models/user.js";

//function to add new note
const addNote = async (req, res) => {
    const { userId, title, body } = req.body;
    try {
        const note = new Note({ userId, title, body });
        await note.save();
        res.status(201).send({
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
    const userId = req.body.userId;
    console.log('userId :>> ', userId);
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
//search note:
const searchNote = async (req, res) => {
    try {
        const { userId, searchText } = req.body;
        const user = await User.findById(userId);
        const notes = await Note.find({
            userId,
            '$or': [
                { 'title': { '$regex': `${searchText}`, '$options': 'i' } },
                { 'body': { '$regex': `${searchText}`, '$options': 'i' } }
            ]
        })
        res.status(200).send({
            success: true,
            message: `${notes.length} notes found`,
            notes
        });
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Unable to search notes"
        })
    }

}
//get note using id
const getById = async (req, res) => {
    const id = req.params.id;
    try {
        const note = await Note.findById(id);
        console.log('note :>> ', note);
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
//delete note useing id
const deleteById = async (req, res) => {
    const id = req.params.id;
    try {
        const note = await Note.findByIdAndDelete(id);
        if (note) {
            res.status(200).send({
                success: true,
                message: "Note deleted sucess fully"
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
            message: "Coudn't delete note"
        })
    }
}
//update note
const editNote = async (req, res) => {
    const id=req.params.id;
    const {title, body } = req.body;
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


export { addNote, getAll, getById, deleteById, editNote, searchNote };