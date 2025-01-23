import {z} from "zod";
const emailSchema=z.string().min(5).max(50).email("invalid email");
const passwordSchema=z.string().min(5,"password too short");
try{
    const email=emailSchema.parse("abcdmail.com");
    passwordSchema.parse("pasword123");
    console.log('email :>> ', email);
}catch(err){
    console.log('err :>> ', err.issues[0].message);
}