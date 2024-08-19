import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const blogs = await prismadb.blog.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        User: true,
      },
    });

    return NextResponse.json(blogs);
  } catch (err) {
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const blog = await prismadb.blog.create({
      data: { ...body, status: "pending" },
    });
    return NextResponse.json(blog);
  } catch (err) {
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE() {}
