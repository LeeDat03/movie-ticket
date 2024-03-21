import { Schema, model, models } from "mongoose";

const screenSchema = new Schema({
  movie: { type: Schema.Types.ObjectId, ref: "Movie" },
  date: Date,
  startTime: [Date],
  seats: [{ type: Schema.Types.ObjectId, ref: "Seat" }],
});

const Screen = models.Screen || model("Screen", screenSchema);

export default Screen;
