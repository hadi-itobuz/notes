import express from "express";
import { createUser, verifyUser } from "../controllers/register.js";

const registerRoute = express.Router();

registerRoute.post('/addUser', createUser);
registerRoute.get('/:token', verifyUser);

export default registerRoute