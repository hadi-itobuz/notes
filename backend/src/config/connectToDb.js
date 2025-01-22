import mongoose from "mongoose";

const connectToDb=()=>{
        mongoose.connect(process.env.CONNECTION_STRING)
        .then(res=>console.log("Connected to data base"))
        .catch(err=>console.log('Can not connect to DB.\nError:>> ', err))
}
export default connectToDb;