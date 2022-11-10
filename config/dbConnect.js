import mongoose from "mongoose";

export async function dbConnect() {
  if (mongoose.connection.readyState >= 1) return;

  return mongoose
    .connect(process.env.DB_LOCAL_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: false,
    })
    .then((con) => console.log("Connected to local database."));
}
