"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Auth } from "@supabase/auth-ui-react";

export default function AuthForm() {
  const supabase = createClientComponentClient();

  return (
    // call auth function
    <Auth
      supabaseClient={supabase}
      view="magic_link"
      showLinks={false}
      providers={[]} // nothing here
      redirectTo="https://trackervideo.vercel.app/auth/callback" // vercel
      appearance={{
        theme: "dark",
        button: {
          className: "bg-white-400 text-gray-900 hover:bg-gray-600",
        },
        input: {
          className: "bg-gray-700 border-gray-600 text-white",
        },
      }}
    />
  );
}
