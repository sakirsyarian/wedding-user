"use client";

import { usePathname } from "next/navigation";
import { Flower, Palette, CalendarDays } from "lucide-react";

import { cn } from "@/lib/utils";

// data
const menus = [
  {
    title: "Mempelai",
    link: "/creation/bride",
    icon: <Flower className="w-5 h-5" />,
  },
  {
    title: "Acara",
    link: "/creation/event",
    icon: <CalendarDays className="w-5 h-5" />,
  },
  {
    title: "Tema",
    link: "/creation/theme",
    icon: <Palette className="w-5 h-5" />,
  },
];

// css
const defaultFlex = ["flex", "items-center"];

export default function Step() {
  const pathname = usePathname();

  return (
    <>
      <ul className={cn(defaultFlex, "gap-7", "md:gap-14", "justify-center")}>
        {menus.map((menu, index) => (
          <li
            key={index}
            className={pathname === menu.link ? "text-primary" : ""}
          >
            <div className={cn(defaultFlex, "gap-2")}>
              {menu.icon}
              <p>{menu.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
