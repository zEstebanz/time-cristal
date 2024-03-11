import mongoose from "mongoose";
import {log,text,sign,sist,href,error,warning,arrow,leaf} from "./app.js"
export const connectDB = async () => {
    const {connection} = await mongoose.connect('mongodb+srv://flavio:01mfdb5522@cluster-1.gcyaclg.mongodb.net/time-crystal-db')
    try {
        if (connection.readyState=== 1) {
            log(text(`${leaf}DB is connected`))
            log(process.env.MONGODB_URL)
            return Promise.resolve(true);
        }
    }
    catch (error) {
        log(error)
        return Promise.reject(false);
    }
}