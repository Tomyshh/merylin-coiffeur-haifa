import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { defaultLocale, locales, type Locale } from "@/lib/i18n";

function hasLocalePrefix(pathname: string): boolean {
  const segment = pathname.split("/")[1];
  return segment !== undefined && locales.includes(segment as Locale);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (hasLocalePrefix(pathname)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname =
    pathname === "/" ? `/${defaultLocale}` : `/${defaultLocale}${pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
