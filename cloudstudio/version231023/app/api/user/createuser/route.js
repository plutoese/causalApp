import prisma from "@/lib/db/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    const body = await request.json();
    const { username, email, password } = body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const group = body.group ? body.group : "user";
    const remark = body.remark ? body.remark : "";

    const newUser = await prisma.User.create({
      data: {
        email: email,
        username: username,
        password: hashedPassword,
        group: group,
        isActive: true,
        remark: remark,
      },
    });

    return NextResponse.json(newUser);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "POST Error", error });
  }
}
