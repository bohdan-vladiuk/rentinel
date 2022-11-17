import mongoose from "mongoose";

// const MONGO_DB_URI = process.env.DB_LOCAL_URI;
const MONGO_DB_URI = process.env.DB_ATLAS_URI;

export async function dbConnect() {
  if (mongoose.connection.readyState >= 1) return;

  return mongoose.connect(MONGO_DB_URI, {
    autoCreate: true,
    autoIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
}

export function jsonify(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export default async function dbMiddleware(req, res, next) {
  try {
    if (!global.mongoose) {
      global.mongoose == dbConnect();
    }
  } catch (e) {
    console.error(e);
  }

  return next();
}
