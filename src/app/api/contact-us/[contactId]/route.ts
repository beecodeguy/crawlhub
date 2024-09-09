import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(
  _: Request,
  { params }: { params: { contactId: string } }
) {
  try {
    const { contactId } = params;

    const contact = await prismadb.contact.findUnique({
      where: {
        id: Number(contactId),
      },
    });

    return NextResponse.json(contact);
  } catch (err) {
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  _: Request,
  { params }: { params: { contactId: string } }
) {
  try {
    const { contactId } = params;

    const contact = await prismadb.contact.delete({
      where: {
        id: Number(contactId),
      },
    });

    return NextResponse.json(contact);
  } catch (err) {
    return new NextResponse("Internal error", { status: 500 });
  }
}
