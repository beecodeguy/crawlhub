import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(request: NextRequest) {
  const session = await getToken({ req: request, secret });
  const role = session?.role;
  const pathname = request?.nextUrl?.pathname;
  if (pathname.includes("/admin/users")) {
    if (role !== "admin") {
      return NextResponse.redirect(new URL("/admin/dashboard", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
