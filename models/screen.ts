import { Schema, model, models } from "mongoose";

const screenSchema = new Schema({
  movie: { type: Schema.Types.ObjectId, ref: "Movie" },
  name: String,
  timeStarts: [Date],
  seats: [
    {
      row: String,
      columns: {
        type: [Number],
      },
      price: Number,
    },
  ],
});

const Screen = models.Screen || model("Screen", screenSchema);

export default Screen;
