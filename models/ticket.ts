import { Schema, model, models } from "mongoose";

const ticketSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  movie: { type: Schema.Types.ObjectId, ref: "Movie" },
  screen: { type: Schema.Types.ObjectId, ref: "Screen" },
  seats: [String],
  bookingDate: { type: Date, default: Date.now },
});

const Ticket = models.Ticket || model("Ticket", ticketSchema);

export default Ticket;
