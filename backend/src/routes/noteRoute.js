import express from "express"
import { addNote,getAll } from "../controllers/note.js";
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

export default noteRoute;