import Movie from "@/models/movie";
import { connectToDB } from "@/utils/db";

export const GET = async () => {
  try {
    await connectToDB();
    const movies = await Movie.find({}).limit(8);

    return new Response(JSON.stringify(movies), { status: 200 });
  } catch (err) {
    console.log("Failed to get movies", err);
    throw new Response("Failed to get movies", { status: 500 });
  }
};
