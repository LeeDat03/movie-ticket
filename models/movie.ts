import { Schema, model, models } from "mongoose";

const movieSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  poster: String,
  director: String,
  duration: Number,
  screens: [{ type: Schema.Types.ObjectId, ref: "Screen" }],
  tickets: [{ type: Schema.Types.ObjectId, ref: "Ticket" }],
});

const Movie = models.Movie || model("Movie", movieSchema);

export default Movie;
