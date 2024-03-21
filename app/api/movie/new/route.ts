import Movie from "@/models/movie";
import { connectToDB } from "@/utils/db";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = await req.json();

  try {
    await connectToDB();
    const newMovie = await Movie.create(body);
    await newMovie.save();

    return new Response(JSON.stringify(newMovie), { status: 201 });
  } catch (err) {
    console.log("Failed to create movie!", err);
    return new Response("Failed to create movie!", { status: 500 });
  }
};
