import Ticket from "@/models/ticket";
import User from "@/models/user";
import { connectToDB } from "@/utils/db";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const data = await req.json();
  try {
    await connectToDB();

    const newTicket = await Ticket.create({
      user: data.user,
      movie: data.movie,
      screen: data.screen,
      seats: data.seats,
    });
    await newTicket.save();

    const user = await User.updateOne(
      { _id: data.user },
      { $push: { tickets: newTicket._id } }
    );
    console.log(user);

    return new Response(JSON.stringify(newTicket), { status: 201 });
  } catch (err) {
    console.log("Failed to create ticket", err);
    return new Response("Failed to create ticket", { status: 500 });
  }
};
