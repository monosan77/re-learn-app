// import { auth } from "@/../auth";

// export { auth as middleware } from "@/../auth";
// export async function middleware() {}

import { auth } from "@/../auth";

export default auth((req) => {
  if (!req.auth) {
    const newUrl = new URL("/session-error", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

// export default auth((req) => {
//   if (!req.auth && req.nextUrl.pathname !== "/session-error") {
//     const newUrl = new URL("/session-error", req.nextUrl.origin);
//     return Response.redirect(newUrl);
//   }
// });
// export const config = {
//   matcher: [
//     "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
//     "/works/:path*",
//   ],
// };
// import { auth } from "@/../auth";

// export async function middleware(req: any) {
//   const response = await auth(req); // `auth`ミドルウェアを呼び出し
//   if (!req.auth && req.nextUrl.pathname !== "/session-error") {
//     const newUrl = new URL("/login", req.nextUrl.origin);
//     return Response.redirect(newUrl);
//   }
//   return response; // 元の`auth`の結果を返す
// }

export const config = {
  // matcher: ["/works/*"],
  matcher: ["/works/home", "/dashboard/:path*"],
  // matcher: [
  //   "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  // ],
};
