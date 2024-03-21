import { Schema, model, models } from "mongoose";

const seatSchema = new Schema({
  screen: { type: Schema.Types.ObjectId, ref: "Screen" },
  seatNumber: String,
  booked: { type: Boolean, default: false },
  ticket: { type: Schema.Types.ObjectId, ref: "Ticket" },
});

const Seat = models.Seat || model("Seat", seatSchema);

export default Seat;
