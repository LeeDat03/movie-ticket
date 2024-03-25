import { connectToDB } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

import Screen from "@/models/screen";
import { convertStringToIndexSeat } from "@/utils/helper";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    await connectToDB();

    const screen = await Screen.find({ _id: params.id }).populate("movie");
    if (!screen) {
      return new NextResponse("Screen not found", { status: 404 });
    }

    return new NextResponse(JSON.stringify(screen), { status: 200 });
  } catch (err) {
    console.log("Failed to get screen", err);
    return new NextResponse("Failed to get screen", { status: 500 });
  }
};

export const PATCH = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    await connectToDB();
    const { seats, movie, name, timeStarts } = await req.json();

    const curScreen = await Screen.findById(params.id).populate("movie");
    if (!curScreen) {
      return new NextResponse("Screen not found", { status: 404 });
    }

    if (seats.length > 0) {
      seats.forEach((seat: string) => {
        const { row, column } = convertStringToIndexSeat(seat);

        curScreen.seats[row].columns[column] = 1;
      });
      await curScreen.save();
    }

    return new NextResponse(JSON.stringify(curScreen), { status: 200 });
  } catch (err) {
    console.log("Failed to update screen", err);
    return new NextResponse("Failed to update screen", { status: 500 });
  }
};
