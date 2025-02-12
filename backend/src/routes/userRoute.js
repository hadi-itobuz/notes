import express from 'express';
import { createUser, verifyUser } from "../controllers/user/register.js";
import { userRegistrationSchema, userLoginSchema, validateData } from "../middleware/verifyCredentials.js";
import { verifyRegistrationToken } from '../middleware/verifyToken.js';
import { verifyCredential } from "../controllers/user/signin.js";
import logout from '../controllers/user/logout.js';
import { verifyAccessToken, verifyRefreshToken } from '../middleware/verifyToken.js';
import genrateAcessToken from '../controllers/user/genrateAcessToken.js';
import isLoggedIn from '../middleware/isLoggedIn.js';
import changePassword from '../controllers/user/changePassword.js';

const userRoute = express.Router();

userRoute.post('/addUser', validateData(userRegistrationSchema), createUser);
userRoute.get('/verify/:token', verifyRegistrationToken, verifyUser);
userRoute.post('/login', validateData(userLoginSchema), verifyCredential);
userRoute.get('/logout', verifyAccessToken, logout);
userRoute.get('/getAccessToken', verifyRefreshToken, isLoggedIn, genrateAcessToken);
userRoute.put('/updatePassword', verifyAccessToken, isLoggedIn, changePassword);
export default userRoute;
