import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const refreshToken = request.cookies.has("rft");
  const accessToken = request.cookies.has("act");

  if (!accessToken || !refreshToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/creation/:path*", "/dashboard/:path*"],
};
