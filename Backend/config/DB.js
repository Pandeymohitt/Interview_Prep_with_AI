import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("MONGOURI FROM DB:", process.env.MONGOURI); // 🔍 must print
    await mongoose.connect(process.env.MONGOURI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("connectDB error->", error);
  }
};
