import express from "express"
//create
import addNote from "../controllers/notes/addNote.js";
//read
import getNotes from "../controllers/notes/getNotes.js";//seaching sorting pagenation
import getAll from "../controllers/notes/getAllNotes.js";
import getById from "../controllers/notes/getNoteById.js";
import getSorted from "../controllers/notes/getSortedNotes.js";
import searchNote from "../controllers/notes/searchNote.js";
import getFile from "../controllers/notes/getFile.js";
//update
import editNote from "../controllers/notes/editNote.js";
import { attachFile, upload } from "../controllers/notes/attachFile.js";
//delete
import deleteById from "../controllers/notes/deleteNoteById.js";
//validation
import { noteSchema, validateData } from "../middleware/verifyCredentials.js";
//middleware
import { verifyAccessToken } from "../middleware/verifyToken.js";
import isLoggedIn from "../middleware/isLoggedIn.js";

const noteRoute = express.Router();
//Create
noteRoute.post('/add', verifyAccessToken, isLoggedIn, validateData(noteSchema), addNote);
//R
noteRoute.post('/', verifyAccessToken, isLoggedIn, getNotes);//this route can get,search,sort and paginate notesSS//pageNumber(>0), notePerPage(>0), sortBy(title,body,createdOn), order(+1 or -1), searchText
noteRoute.get('/getAll', verifyAccessToken, isLoggedIn, getAll); //get all notes pertaining to a user
noteRoute.get('/search', verifyAccessToken, isLoggedIn, searchNote);
noteRoute.post('/getSorted', verifyAccessToken, isLoggedIn, getSorted)
noteRoute.get('/getId/:id', verifyAccessToken, isLoggedIn, getById);
noteRoute.get('/getFile/:id', getFile);//File
//U
noteRoute.put('/edit/:id', verifyAccessToken, isLoggedIn, editNote);
noteRoute.put('/upload/:id', verifyAccessToken, isLoggedIn, upload.single('filename'), attachFile);//File:Multer
//D
noteRoute.delete('/deleteId/:id', verifyAccessToken, isLoggedIn, deleteById);

export default noteRoute;