import express from "express"
import { addNote, getAll, getById, deleteById, editNote, searchNote } from "../controllers/note.js";
import { noteSchema, validateData } from "../middleware/verifyCredentials.js";
import { verifyAcessToken } from "../middleware/verifyToken.js";

const noteRoute = express.Router();

noteRoute.get('/', (req, res) => {
    res.send({
        sucess: true,
        message: "this is the notes route"
    })
})

//operations wrt to user id
noteRoute.post('/add', verifyAcessToken, validateData(noteSchema), addNote);
noteRoute.get('/getAll', verifyAcessToken, getAll); //get all notes pertaining to a user
noteRoute.get('/search', verifyAcessToken, searchNote);

//operations wrt to note id
noteRoute.get('/getId/:id', verifyAcessToken, getById);
noteRoute.delete('/deleteId/:id', verifyAcessToken, deleteById);
noteRoute.put('/edit/:id', verifyAcessToken, editNote);

export default noteRoute;