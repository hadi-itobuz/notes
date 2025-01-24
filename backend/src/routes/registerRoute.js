import express from "express";
import { createUser, verifyUser } from "../controllers/register.js";
import { userRegistrationSchema,validateData } from "../middleware/verifyCredentials.js";
import verifyToken from "../middleware/verifyToken.js";

const registerRoute = express.Router();

registerRoute.post('/addUser',validateData(userRegistrationSchema) , createUser);
registerRoute.get('/:token',verifyToken ,verifyUser);

export default registerRoute