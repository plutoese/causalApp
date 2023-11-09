import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/auth";
import UserNavbar from "./usernavbar";
import Link from "next/link";

export default async function LoginNavBar() {
  const session = await getServerSession(authOptions);

  return (
    <>
      {!session ? (
        <>
          <div className="bg-provence-yellow rounded text-sm font-medium align-middle text-white px-3 py-2 hover:scale-120 hover:bg-yellow-500 hover:shadow-lg transform transition duration-100 cursor-pointer">
            <Link href="/auth/register">
              <p> 注册</p>
            </Link>
          </div>
          <div className="bg-provence-lavender rounded text-sm font-medium align-middle text-white px-3 py-2 hover:scale-120 hover:bg-purple-600 hover:shadow-lg transform transition duration-100 cursor-pointer">
            <Link href="/auth/loginin">
              <p> 登录</p>
            </Link>
          </div>
        </>
      ) : (
        <div>
          <UserNavbar />
        </div>
      )}
    </>
  );
}
