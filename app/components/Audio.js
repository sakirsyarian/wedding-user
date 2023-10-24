"use client";

import { usePathname } from "next/navigation";
const { Howler } = require("howler");

export default function Audio({ children }) {
  const pathname = usePathname();
  if (pathname !== "/dashboard/music") {
    Howler.stop();
  }

  return <>{children}</>;
}
