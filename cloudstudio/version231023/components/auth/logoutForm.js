"use client";

import { signOut } from "next-auth/react";

export default function LogoutForm() {
  return (
    <button
      className="bg-blue-600"
      onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
    >
      Sign Out
    </button>
  );
}
