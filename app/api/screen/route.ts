import { connectToDB } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

import Screen from "@/models/screen";

export const GET = async (req: NextRequest) => {
  try {
    const movieId = req.nextUrl.searchParams.get("movieId");
    await connectToDB();

    const screen = await Screen.find({ movie: movieId }).populate("movie");
    if (!screen) {
      return new NextResponse("Screen not found", { status: 404 });
    }

    return new NextResponse(JSON.stringify(screen), { status: 200 });
  } catch (err) {
    console.log("Failed to get screen", err);
    return new NextResponse("Failed to get screen", { status: 500 });
  }
};
