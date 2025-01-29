import express from "express"
import { addNote, getAll, getById, deleteById, editNote, searchNote } from "../controllers/note.js";
import { noteSchema, validateData } from "../middleware/verifyCredentials.js";
import { verifyAccessToken } from "../middleware/verifyToken.js";
import isLoggedIn from "../middleware/isLoggedIn.js";

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

//operations wrt to note id
noteRoute.get('/getId/:id', verifyAccessToken, isLoggedIn, getById);
noteRoute.delete('/deleteId/:id', verifyAccessToken, isLoggedIn, deleteById);
noteRoute.put('/edit/:id', verifyAccessToken, isLoggedIn, editNote);

export default noteRoute;