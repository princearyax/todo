import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongo connection success");
    } catch (error) {
        console.error("mongo didn't connect", error);
        process.exit(1);
    }
}