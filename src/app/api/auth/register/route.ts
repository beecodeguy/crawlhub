import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";
// import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password, role } = body;

    if (!email) {
      return new NextResponse("Email is Required", { status: 400 });
    }

    if (!password) {
      return new NextResponse("Password field is Required", { status: 400 });
    }

    const isMatchedEmail = await prismadb.user.findUnique({
      where: {
        email: email,
      },
    });

    if (isMatchedEmail) {
      return new NextResponse("Email already registered", { status: 400 });
    } else {
      // const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await prismadb.user.create({
        data: {
          email,
          name,
          role,
          password,
        },
      });
      return NextResponse.json(newUser);
    }
  } catch (error) {
    console.log("REGSITER_USER", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
