import mongoose from "mongoose";

const connectMongoDB = () => {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    console.log("connected to mongo");
  } catch (error) {
    console.log(error);
  }
};
