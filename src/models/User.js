import { model, models, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String },
    email: { type: String, unique: true, index: true, required: true },
    image: { type: String },
    passwordHash: { type: String },
    authProvider: {
      type: String,
      enum: ["credentials", "google"],
      default: "credentials",
    },
    role: { type: String, enum: ["patient", "admin"], default: "patient" },
  },
  { timestamps: true }
);

const User = models.User || model("User", UserSchema);
export default User;
