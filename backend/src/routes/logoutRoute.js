import express from "express"
import User from "../models/user.js";
const logoutRoute=express.Router();
logoutRoute.put('/',(req,res)=>{
    const {id}=req.body;
    User.findByIdAndUpdate(id,{isLoggedIn:false},{new:true}).then((user)=>{
        (user)?res.status(200).send({success:true,message:`${user.name} was loggedout`})
        :res.status(400).send({success:true, message:"Unable to loggout"});
    }).catch((err)=>{
        res.status(400).send({success:true, message:"Unable to loggout"});
    })
})
export default logoutRoute;