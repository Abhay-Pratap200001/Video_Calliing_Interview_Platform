import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(ENV.DB_URL);
    console.log("✌️Coonected to mongodb:", connection.connection.host);
  } catch (error) {
    console.log("❌ mongodb coonection failed", error);
    process.exit(1)
  }
};
