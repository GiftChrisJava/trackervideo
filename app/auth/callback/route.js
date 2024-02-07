import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// Use the NEXT_PUBLIC_FRONTEND_URL variable to store the URL of your Next.js website on Vercel
export const NEXT_URL =
  process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000";

export async function GET(req) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");

  if (code) {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

    await supabase.auth.exchangeCodeForSession(code);
  }
  // Use the NEXT_URL constant in your redirect function
  return NextResponse.redirect(new URL("/login", NEXT_URL));
}
