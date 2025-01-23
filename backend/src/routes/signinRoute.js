import express from "express";
import { verifyCredential } from "../controllers/signin.js";
const signinRoute = express.Router();
import { userLoginSchema, validateData } from "../middleware/verifyCredentials.js";

signinRoute.get('/verify', validateData(userLoginSchema), verifyCredential);

export default signinRoute;