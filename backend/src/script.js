import express from "express";
import 'dotenv/config';
import connectToDb from "./config/connectToDb.js";
import noteRoute from "./routes/noteRoute.js";
import userRoute from "./routes/userRoute.js";
import { rateLimit } from "express-rate-limit";
import cors from "cors";
const limiter = rateLimit({
    windowMs: 5 * 50 * 1000,
    limit: 15,
    standardHeaders: true,
    legacyHeaders: false,
});

const app = express()
app.use(express.json());
app.use(cors());
// app.use(limiter);

connectToDb();//connecting to mongo db data base

app.use('/notes', noteRoute);
app.use('/user', limiter, userRoute)
app.listen(process.env.PORT, () => {
    console.log(`Listening at port: http://localhost:${process.env.PORT}/`);
})