import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(
  _: Request,
  { params }: { params: { blogId: string } }
) {
  try {
    const { blogId } = params;
    const blog = await prismadb.blog.findUnique({
      where: {
        id: +blogId,
      },
      include: {
        User: true,
      },
    });
    return NextResponse.json(blog);
  } catch (err) {
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { blogId: string } }
) {
  try {
    const body = await req.json();
    const { blogId } = params;
    await prismadb.blog.update({
      where: {
        id: +blogId,
      },
      data: { ...body },
    });
    const blog = await prismadb.blog.update({
      where: {
        id: +blogId,
      },
      data: { ...body },
    });
    console.log("successful");
    return NextResponse.json(blog);
  } catch (err) {
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  _: Request,
  { params }: { params: { blogId: string } }
) {
  try {
    const { blogId } = params;
    await prismadb.blog.delete({
      where: {
        id: +blogId,
      },
    });
    return NextResponse.json({ message: "Deleted Successfully!!" });
  } catch (err) {
    return new NextResponse("Internal error", { status: 500 });
  }
}
