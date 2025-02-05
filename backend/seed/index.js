import mongoose from "mongoose";
import "dotenv/config"
import genrateNote from "./note.js";
import genrateUser from "./user.js";
import User from "../src/models/user.js";
import Note from "../src/models/note.js";
import Session from "../src/models/session.js";
const main = async () => {
        await mongoose.connect(process.env.CONNECTION_STRING)
        
        await User.deleteMany({});
        await Note.deleteMany({});
        await Session.deleteMany({});

        await genrateUser(20);
        await genrateNote(100);
        await mongoose.disconnect();

}

main();