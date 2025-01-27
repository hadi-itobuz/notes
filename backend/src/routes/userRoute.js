import express from 'express';
import { createUser, verifyUser } from "../controllers/register.js";
import { userRegistrationSchema,userLoginSchema,validateData } from "../middleware/verifyCredentials.js";
import { verifyRegistrationToken } from '../middleware/verifyToken.js';
import { verifyCredential } from "../controllers/signin.js";
import User from '../models/user.js';

const userRoute=express.Router();

userRoute.post('/addUser',validateData(userRegistrationSchema) , createUser);
userRoute.get('/verify/:token',verifyRegistrationToken ,verifyUser);
userRoute.get('/login', validateData(userLoginSchema), verifyCredential);
userRoute.patch('/logout',(req,res)=>{
    const {id}=req.body;
    User.findByIdAndUpdate(id,{isLoggedIn:false},{new:true}).then((user)=>{
        (user)?res.status(200).send({success:true,message:`${user.name} was loggedout`})
        :res.status(400).send({success:false, message:"Unable to loggout"});
    }).catch((err)=>{
        res.status(400).send({success:false, message:"Unable to loggout"});
    })
})
export default userRoute;
