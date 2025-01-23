import express from "express"
import { addNote } from "../controllers/note.js";
const noteRoute = express.Router();

noteRoute.get('/', (req, res) => {
    res.send({
        sucess: true,
        message: "this is the notes route"
    })
})
noteRoute.post('/add',addNote);


export default noteRoute;