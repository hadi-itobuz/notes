import express from "express"
import { addNote, getAll, getById, deleteById, editNote, searchNote } from "../controllers/note.js";
import { noteSchema, validateData } from "../middleware/verifyCredentials.js";
import { verifyAcessToken } from "../middleware/verifyToken.js";
import isLoggedIn from "../middleware/isLoggedIn.js";

const noteRoute = express.Router();

noteRoute.get('/', (req, res) => {
    res.send({
        sucess: true,
        message: "this is the notes route"
    })
})
noteRoute.post('/add', verifyAcessToken, isLoggedIn, validateData(noteSchema), addNote);
noteRoute.get('/getAll', verifyAcessToken, isLoggedIn, getAll);
noteRoute.get('/search', verifyAcessToken, searchNote);

noteRoute.get('/getId/:id', verifyAcessToken, isLoggedIn, getById);
noteRoute.delete('/deleteId/:id', verifyAcessToken, isLoggedIn, deleteById);
noteRoute.put('/edit/:id', verifyAcessToken, isLoggedIn, editNote);

export default noteRoute;