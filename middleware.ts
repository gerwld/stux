import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

export default function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const pathname = url.pathname;

   // Check if user is navigating from the Chrome Web Store
   const referer = req.headers.get("referer");
   console.log("Referer:", referer ?? "No referer");
   if (referer === "https://chromewebstore.google.com/detail/igplus-hide-instagram-ree/dbbopjndlaginbghfoibbndhlbpdpapd") {
     return NextResponse.redirect(new URL("/igp", req.url));
   }
 
  
  // Checks if the path already has a locale
  const localeMatch = pathname.match(/^\/(pl|en|uk|ru|fr|ar|be|de|hi|ja|nl|pt|es|sv|zh)(\/|$)/);
  
  if (!localeMatch) {
    //detect user language from headers
    const acceptLang = req.headers.get("accept-language") || "en";
    const preferredLocale = acceptLang.split(",")[0].split("-")[0]; // Extract first language
    const locale = routing.locales.includes(preferredLocale) ? preferredLocale : routing.defaultLocale;

    return NextResponse.redirect(new URL(`/${locale}${pathname}`, req.url));
  }

  return createMiddleware(routing)(req);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"], //excludes static files and API routes
};
