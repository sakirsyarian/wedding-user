"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export default function Logout() {
  const router = useRouter();

  async function signout() {
    const res = await fetch("/api/logout");
    const response = await res.json();

    router.push("/login");
  }

  return (
    <>
      <div onClick={signout} className="w-full">
        <div className="flex">
          <LogOut className="mr-2 w-[18px] h-[18px]" />
          Logout
        </div>
      </div>
    </>
  );
}
