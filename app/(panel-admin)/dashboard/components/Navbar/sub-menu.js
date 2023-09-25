"use client";

import {
  Home,
  Flower,
  Gift,
  Music,
  CalendarDays,
  ScrollText,
  Image as Gallery,
} from "lucide-react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

// data
const menu = [
  {
    title: "Bride",
    link: "/",
    icon: <Flower className="w-5 h-5" />,
  },
  {
    title: "Event",
    link: "/",
    icon: <CalendarDays className="w-5 h-5" />,
  },
  {
    title: "Gift",
    link: "/",
    icon: <Gift className="w-5 h-5" />,
  },
  {
    title: "Gallery",
    link: "/",
    icon: <Gallery className="w-5 h-5" />,
  },
  {
    title: "Music",
    link: "/",
    icon: <Music className="w-5 h-5" />,
  },
  {
    title: "Story",
    link: "/",
    icon: <ScrollText className="w-5 h-5" />,
  },
];

// css
const defaultFlex = ["flex", "items-center", "gap-2"];

export default function SubMenuNavbar() {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-slate-50">
              <div className={cn(defaultFlex, "text-slate-600")}>
                <Home className="w-5 h-5" />
                <h2>Weddings</h2>
              </div>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="text-slate-500">
              <ul className="p-3 grid gap-2 lg:w-40 text-sm">
                {menu.map((item, index) => (
                  <li
                    key={index}
                    className={cn(defaultFlex, "p-2", "hover:bg-slate-50")}
                  >
                    {item.icon}
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
