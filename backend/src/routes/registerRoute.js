import express from "express";
import { createUser, verifyUser } from "../controllers/register.js";
import { userRegistrationSchema,validateData } from "../middleware/verifyCredentials.js";

const registerRoute = express.Router();

registerRoute.post('/addUser',validateData(userRegistrationSchema) , createUser);
registerRoute.get('/:token', verifyUser);

export default registerRoute