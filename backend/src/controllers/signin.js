import bcrypt from 'bcryptjs';
import User from '../models/user.js';
const verifyCredential= async (req,res)=>{

    const {email,password}=req.body;
    try{
        const user= await User.findOne({email:email})
        if(user.isVerified && bcrypt.compareSync(password, user.password)){
            res.status(200).send("Success")
        }else{
            res.status(400).send("Can't loggin");
        }
    }catch (error) {
        res.status(500).send("Unable to fetch user")
    }
}

export {verifyCredential};