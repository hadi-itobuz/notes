import express from "express";
import 'dotenv/config';
import connectToDb from "./config/connectToDb.js";
import noteRoute from "./routes/noteRoute.js";
import userRoute from "./routes/userRoute.js";

const app = express()
app.use(express.json());

connectToDb();

app.use('/notes', noteRoute);
app.use('/user',userRoute)
app.listen(process.env.PORT, () => {
    console.log(`Listening at port: http://localhost:${process.env.PORT}/`);
})