import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const contact = await prismadb.contact.create({
      data: { ...body },
    });
    return NextResponse.json(contact);
  } catch (err) {
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function GET() {
  try {
    const contacts = await prismadb.contact.findMany({
      select: {
        id: true,
        name: true,
        companyName: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(contacts);
  } catch (err) {
    return new NextResponse("Internal error", { status: 500 });
  }
}
