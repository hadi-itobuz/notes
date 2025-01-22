import express from "express";
import 'dotenv/config';
import connectToDb from "./config/connectToDb.js";
import route from "./routes/register.js";
const app=express()


connectToDb();
app.use(express.json());
app.use('/register',route)
app.get('/',(req,res)=>{
    res.send("get request");
})
app.listen(process.env.PORT,()=>{
    console.log(`Listening at port: http://localhost:${process.env.PORT}/`);
})