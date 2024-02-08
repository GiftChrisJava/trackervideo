import { NextResponse } from "next/server";
import { createSupabaseFrontEndClient } from "./util/supabase";

// Create a Supabase client with the ssr package
const supabase = createSupabaseFrontEndClient;

export async function middleware(req) {
  const res = NextResponse.next();

  try {
    // Get the user session from the Supabase client
    const { data: session } = await supabase.auth.getSession();
    const user = session?.user;

    // Conditional redirects based on user and location
    if (user) {
      if (req.nextUrl.pathname === "/") {
        // Redirect to videos if already authenticated at home
        return NextResponse.redirect(new URL("/videos", req.url));
      }
      // Optionally, redirect to a different page based on user roles
      // if (user.role === "admin") {
      //   return NextResponse.redirect(new URL("/admin", req.url));
      // }
    } else if (req.nextUrl.pathname !== "/") {
      // Redirect unauthenticated users to home if on other pages
      return NextResponse.redirect(new URL("/", req.url));
    }
  } catch (error) {
    // Handle errors gracefully, redirect to error page or log
    console.error("Error fetching user session:", error);
    // return NextResponse.redirect(new URL("/error", req.url));
  }

  return res;
}

// Run this middleware on these routes
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
