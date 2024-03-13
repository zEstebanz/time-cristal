import mongoose from "mongoose";
import { log, text, error, leaf } from "./app.js"

export const connectDB = async () => {
    const { connection } = await mongoose.connect('mongodb+srv://flavio:01mfdb5522@cluster-1.gcyaclg.mongodb.net/time-crystal-db')
    try {
        if (connection.readyState === 1) {
            log(text(`${leaf}DB is connected`))
            return Promise.resolve(true);
        }
    }
    catch (error) {
        log(error(`Error  ${error}`))
        return Promise.reject(false);
    }
}