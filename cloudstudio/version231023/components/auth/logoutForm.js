"use client";

import { signOut } from "next-auth/react";

export default function LogoutForm() {
  return (
    <button
      className="text-sm font-medium text-gray-900 bg-[#FFEDD5] px-12 py-2 rounded-md shadow-sm"
      onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
    >
      登出
    </button>
  );
}
