import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req) {
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
  console.log(req.url, "url in callback");
  const replacementUrl = originalUrl.replace(/^http:\/\/localhost:3000\//, 'https://trackervideo.vercel.app/');

  const { searchParams } = new URL(replacementUrl );

  const code = searchParams.get("code");

  if (code) {
    await supabase.auth.exchangeCodeForSession(code);
  }

  return NextResponse.redirect(new URL("/videos", replacementUrl ));
}
