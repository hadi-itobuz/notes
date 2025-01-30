import express from "express"
import addNote from "../controllers/notes/addNote.js";
import getAll from "../controllers/notes/getAllNotes.js";
import getById from "../controllers/notes/getNoteById.js";
import editNote from "../controllers/notes/editNote.js";
import deleteById from "../controllers/notes/deleteNoteById.js";
import getSorted from "../controllers/notes/getSortedNotes.js";
import searchNote from "../controllers/notes/searchNote.js";
import { noteSchema, validateData } from "../middleware/verifyCredentials.js";
import { verifyAccessToken } from "../middleware/verifyToken.js";
import isLoggedIn from "../middleware/isLoggedIn.js";
import {attachFile,upload} from "../controllers/notes/attachFile.js";

const noteRoute = express.Router();

noteRoute.get('/', (req, res) => {
    res.send({
        sucess: true,
        message: "this is the notes route"
    })
})

//operations wrt to user id
noteRoute.post('/add', verifyAccessToken, isLoggedIn, validateData(noteSchema), addNote);
noteRoute.get('/getAll', verifyAccessToken, isLoggedIn, getAll); //get all notes pertaining to a user
noteRoute.get('/search', verifyAccessToken, isLoggedIn, searchNote);
noteRoute.post('/getSorted', verifyAccessToken, isLoggedIn, getSorted)

//operations wrt to note id
noteRoute.get('/getId/:id', verifyAccessToken, isLoggedIn, getById);
noteRoute.delete('/deleteId/:id', verifyAccessToken, isLoggedIn, deleteById);
noteRoute.put('/edit/:id', verifyAccessToken, isLoggedIn, editNote);
noteRoute.put('/upload',verifyAccessToken,isLoggedIn,upload.single('file'),attachFile);

export default noteRoute;