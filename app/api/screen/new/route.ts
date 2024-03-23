import Screen from "@/models/screen";
import { connectToDB } from "@/utils/db";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const data = await req.json();
  try {
    await connectToDB();
    const newScreen = await Screen.create(data);

    return new Response(JSON.stringify(newScreen), { status: 201 });
  } catch (err) {
    console.log("Failed to create screen", err);
    return new Response("Failed to create screen", { status: 500 });
  }
};
