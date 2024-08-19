import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { id, status } = body;
    const blog = await prismadb.blog.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });
    return NextResponse.json(blog);
  } catch (err) {
    return new NextResponse("Internal error", { status: 500 });
  }
}
