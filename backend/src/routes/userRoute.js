import express from 'express';
import { createUser, verifyUser } from "../controllers/register.js";
import { userRegistrationSchema, userLoginSchema, validateData } from "../middleware/verifyCredentials.js";
import { verifyRegistrationToken } from '../middleware/verifyToken.js';
import { verifyCredential } from "../controllers/signin.js";
import logout from '../controllers/logout.js';
import { verifyAccessToken, verifyRefreshToken } from '../middleware/verifyToken.js';
import genrateAcessToken from '../controllers/genrateAcessToken.js';

const userRoute = express.Router();

userRoute.post('/addUser', validateData(userRegistrationSchema), createUser);
userRoute.get('/verify/:token', verifyRegistrationToken, verifyUser);
userRoute.post('/login', validateData(userLoginSchema), verifyCredential);
userRoute.patch('/logout', verifyAccessToken, logout)
userRoute.get('/getAccessToken', verifyRefreshToken, genrateAcessToken)
export default userRoute;
