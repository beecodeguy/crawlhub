// middlewares/withAuthMiddleware.ts
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";
import { CustomMiddleware } from "./chain";

const secret = process.env.NEXTAUTH_SECRET;

export function withAuthMiddleware(
  middleware: CustomMiddleware
): CustomMiddleware {
  return async (
    request: NextRequest,
    event: NextFetchEvent,
    response: NextResponse
  ) => {
    const session = await getToken({ req: request, secret });

    const role = session?.role;
    const pathname = request?.nextUrl?.pathname;
    if (pathname.includes("/admin/users")) {
      if (role !== "admin") {
        return NextResponse.redirect(new URL("/admin/dashboard", request.url));
      }
    }

    return middleware(request, event, response);
  };
}
