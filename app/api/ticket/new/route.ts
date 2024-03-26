import Ticket from "@/models/ticket";
import { connectToDB } from "@/utils/db";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const data = await req.json();
  try {
    await connectToDB();

    const newTicket = await Ticket.create(data);

    return new Response(JSON.stringify(newTicket), { status: 201 });
  } catch (err) {
    console.log("Failed to create ticket", err);
    return new Response("Failed to create ticket", { status: 500 });
  }
};
