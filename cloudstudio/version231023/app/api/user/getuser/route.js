import prisma from "@/lib/db/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { username } = body;

    const user = await prisma.User.findUnique({
      where: {
        username: String(username),
      },
    });

    if (!user) {
      return NextResponse.json({});
    }

    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "POST Error", error });
  }
}
