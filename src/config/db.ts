import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
    try {
        let uri =process.env.MONGODB_URI as string;
        await mongoose.connect(uri)
        .then(()=>console.log("Database is connected..."))
        .catch((err)=>console.log("Error in db connection",err))
    } catch (error) {
        console.error(error)
    }
}
export {connectDB};