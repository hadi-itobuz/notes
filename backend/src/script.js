import express from "express";
import 'dotenv/config';
import connectToDb from "./config/connectToDb.js";
import registerRoute from "./routes/registerRoute.js";
import signinRoute from "./routes/signinRoute.js";
const app = express()

connectToDb();

app.use(express.json());
app.use('/register', registerRoute);
app.use('/signin',signinRoute);
app.listen(process.env.PORT, () => {
    console.log(`Listening at port: http://localhost:${process.env.PORT}/`);
})