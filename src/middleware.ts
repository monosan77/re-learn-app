// import { auth } from "@/../auth";

export { auth as middleware } from "@/../auth";
// export async function middleware() {}

import { auth } from "@/../auth";

export default auth((req) => {
  if (!req.auth) {
    const newUrl = new URL("/session-error", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

export const config = {
  // matcher: ["/works/*"],
  // matcher: ["/works/:path*"],
  matcher: [
    "/works/:path*",
    // "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
