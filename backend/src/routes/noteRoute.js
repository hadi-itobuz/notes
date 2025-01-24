import express from "express"
import { addNote, getAll, getById, deleteById, editNote, searchNote } from "../controllers/note.js";
import { noteSchema, validateData } from "../middleware/verifyCredentials.js";
import isLoggedIn from "../middleware/isLoggedIn.js";

const noteRoute = express.Router();

noteRoute.get('/', (req, res) => {
    res.send({
        sucess: true,
        message: "this is the notes route"
    })
})
noteRoute.post('/add', validateData(noteSchema), addNote);
noteRoute.get('/getAll', getAll);
noteRoute.get('/search',searchNote);

noteRoute.get('/getId', isLoggedIn, getById);
noteRoute.delete('/deleteId', isLoggedIn, deleteById);
noteRoute.put('/edit', isLoggedIn, editNote);

export default noteRoute;