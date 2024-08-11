import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectionDB = async ()=>{
    try {
        const connectionInstance = mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB server connected !!! host: ${(await connectionInstance).Connection.host}`);
        
    } catch (error) {

        console.log("MongoDB connection Faild !!",error);
        process.exit(1)
        
    }
}

export {connectionDB}