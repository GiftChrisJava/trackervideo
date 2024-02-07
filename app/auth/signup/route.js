import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
  const url = new URL(req.url);
  const cookieStore = cookies();

  const formData = await req.formData();

  const email = String(formData.get("email"));
  const password = String(formData.get("password"));

  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback`,
    },
  });

  return NextResponse.redirect(`${url.origin}/message`, { status: 301 });
}
