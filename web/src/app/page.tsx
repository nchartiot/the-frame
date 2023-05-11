import { FileUploader } from "@/components/FileUploader";
import { LoginForm } from "../components/login-form";
import Link from "next/link";

import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { headers, cookies } from "next/headers";

const Home = async () => {
  const supabase = createServerComponentSupabaseClient({
    headers,
    cookies,
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className="flex min-h-screen min-w-full flex-col items-center justify-between p-24">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Photo-frame
      </h1>
      {!user && <LoginForm />}
      {user && <Link href="/gallery">Go to gallery</Link>}
    </main>
  );
};

export default Home;
