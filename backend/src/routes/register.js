import express from "express";
import {createUser,verifyUser} from "../controllers/register.js";

const route=express.Router();

route.post('/addUser',createUser);
route.get('/:token',verifyUser);
export default route