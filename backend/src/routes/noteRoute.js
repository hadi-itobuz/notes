import express from "express"
import { addNote,getAll,getById,deleteById } from "../controllers/note.js";
import { noteSchema, validateData } from "../middleware/verifyCredentials.js";

const noteRoute = express.Router();

noteRoute.get('/', (req, res) => {
    res.send({
        sucess: true,
        message: "this is the notes route"
    })
})
noteRoute.post('/add',validateData(noteSchema) ,addNote);
noteRoute.get('/getAll',getAll);
noteRoute.get('/getId',getById);
noteRoute.delete('/deleteId',deleteById);

export default noteRoute;