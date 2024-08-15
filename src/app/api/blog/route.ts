import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const blogs = await prismadb.blog.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(blogs);
  } catch (err) {
    return new NextResponse("Internal error", { status: 500 });
  }
}
