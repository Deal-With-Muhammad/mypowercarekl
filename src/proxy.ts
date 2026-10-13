import { NextResponse, type NextRequest } from "next/server";

// English pages are served without a prefix (/pricing), Malay and Chinese
// under /ms and /zh. Every page lives under app/[lang], so un-prefixed paths
// are rewritten to /en/... internally, and anyone who types /en/... is sent to
// the clean URL so each page has exactly one address.

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }

  if (/^\/(ms|zh)(\/|$)/.test(pathname)) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip Next internals, API routes, metadata routes and any path with a file
  // extension (images, sitemap.xml, robots.txt, llms.txt, favicon.ico).
  matcher: ["/((?!_next/|api/|opengraph-image|icon|apple-icon|.*\\.[a-zA-Z0-9]+$).*)"],
};
