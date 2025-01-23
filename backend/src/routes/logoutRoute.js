import express from "express"
import User from "../models/user.js";
const logoutRoute=express.Router();
logoutRoute.get('/',(req,res)=>{
    const {id}=req.body;
    User.findByIdAndUpdate(id,{isLoggedIn:false},{new:true}).then((user)=>res.status(200).send(`${user.name} was loggedout`)).catch((err)=>{
        (err)?res.status(400).send("Unable to Logout"):res.status(200).send("Successfully logged out");
    })
})
export default logoutRoute;