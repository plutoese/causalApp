import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);

  if (!session) {
    redirect("/auth/loginin")
  }

  return (
    <>
      <div>
        <h1 className="text-3xl text-blue-600">Home</h1>
        <div>{JSON.stringify(session)}</div>
        <div>{session.user.name}</div>
        <Link href="/auth/logout">登出</Link>
      </div>
    </>
  )
}
