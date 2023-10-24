"use client";

import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { LogOut } from "lucide-react";

export default function Logout() {
  const router = useRouter();

  async function signout() {
    const res = await fetch("/api/logout");
    const response = await res.json();

    toast.success(response.message, {
      duration: 1000,
    });
    await new Promise((resolve) => setTimeout(resolve, 2000));

    router.push("/login");
  }

  return (
    <>
      <Toaster position="top-right" />
      <div onClick={signout} className="w-full">
        <div className="flex">
          <LogOut className="mr-2 w-[18px] h-[18px]" />
          Logout
        </div>
      </div>
    </>
  );
}
