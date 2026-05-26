import mongoose from "mongoose";

const connectDb = async () => {
  const connString = process.env.MONGO_URL;

  try {
    await mongoose.connect(connString);
    console.log("MongoDB Connected... 🍃");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDb;