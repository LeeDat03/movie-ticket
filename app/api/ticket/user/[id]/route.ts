import Ticket from "@/models/ticket";
import { connectToDB } from "@/utils/db";
import { NextRequest } from "next/server";

// GET TICKET BY USER ID
export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const userId = params.id;
  try {
    await connectToDB();
    const tickets = await Ticket.find({ user: userId })
      .populate("screen")
      .populate("user")
      .populate("movie")
      .sort({ bookingDate: -1 });

    if (!tickets) {
      return new Response("No ticket found", { status: 404 });
    }
    return new Response(JSON.stringify(tickets), { status: 200 });
  } catch (err) {
    console.log("Can not get ticket by user id", err);
    return new Response("Can not get ticket by user id", { status: 500 });
  }
};
