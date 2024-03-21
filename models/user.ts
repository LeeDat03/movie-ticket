import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Username is required"],
  },
  email: {
    type: String,
    required: [true, "Username is required"],
  },
  imageUrl: String,
  role: {
    type: String,
    enum: ["USER", "ADMIN"],
    default: "USER",
  },
  tickets: [{ type: Schema.Types.ObjectId, ref: "Ticket" }],
});

const User = models.User || model("User", userSchema);

export default User;
