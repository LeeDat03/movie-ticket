import { Schema, model, models } from "mongoose";

const screenSchema = new Schema({
  movie: { type: Schema.Types.ObjectId, ref: "Movie" },
  name: String,
  date: Date,
  startTime: Date,
  seats: [
    {
      row: String,
      columns: {
        type: [Number],
        default: 0,
      },
    },
  ],
});

const Screen = models.Screen || model("Screen", screenSchema);

export default Screen;
