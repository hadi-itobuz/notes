import express from "express";
import { verifyCredential } from "../controllers/signin.js"; 
const signinRoute = express.Router();
signinRoute.get('/verify',verifyCredential);

export default signinRoute;