import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) throw new Error("Missing MONGODB_URI");

let cached = globalThis;

cached.mongoose ??= { conn: null, promise: null };

async function dbConnect() {
  if (cached.mongoose.conn) return cached.mongoose.conn;

  if (!cached.mongoose.promise) {
    cached.mongoose.promise = mongoose
      .connect(MONGODB_URI, { dbName: "serene" })
      .then((mongoose) => mongoose);
  }

  console.log("DB connection successfully");
  cached.mongoose.conn = await cached.mongoose.promise;
  return cached.mongoose.conn;
}

export default dbConnect;
