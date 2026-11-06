import { NextResponse, type NextRequest } from "next/server";

/** Pass the URL's actual content language to the shared document layout. */
export function proxy(request: NextRequest) {
  const segment = request.nextUrl.pathname.split("/")[1];
  const locale = segment === "en" || segment === "de" || segment === "es" ? segment : "nb";
  const headers = new Headers(request.headers);
  headers.set("x-zeneco-document-lang", locale);
  return NextResponse.next({ request: { headers } });
}

export const config = {
  matcher: ["/((?!api/|_next/|.*\\..*).*)"],
};
