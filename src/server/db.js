import mongoose from "mongoose";
import { MONGODB_URL } from "./config.js"
import { log, text, error, leaf } from "./app.js"
export const connectDB = async () => {
    const { connection } = await mongoose.connect(MONGODB_URL)
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