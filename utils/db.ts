import mongoose, { MongooseOptions } from "mongoose";

export const connectToDB = async () => {
  let isConnected = false;
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MonoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI!, {
      dbName: "movie-booking-ticket",
    });
    console.log("MongoDB is connected!");
  } catch (err) {
    console.log("Failed to connect", err);
  }
};
