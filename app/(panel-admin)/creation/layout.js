import Link from "next/link";
import Image from "next/image";
import { Flower, Palette, CalendarDays } from "lucide-react";

import { cn } from "@/lib/utils";
import MenuNavbar from "../dashboard/components/Navbar/menu";

// data
const menus = [
  {
    title: "Mempelai",
    link: "bride",
    icon: <Flower className="w-5 h-5" />,
  },
  {
    title: "Acara",
    link: "event",
    icon: <CalendarDays className="w-5 h-5" />,
  },
  {
    title: "Tema",
    link: "theme",
    icon: <Palette className="w-5 h-5" />,
  },
];

// css
const defaultSpaceY = ["space-y-8"];
const defaultFlex = ["flex", "items-center"];
const defaultCard = ["p-6", "rounded-lg", "shadow-md", "bg-white"];

export default function LayoutCreation({ children }) {
  return (
    <>
      <section className="px-5 py-10 md:container">
        <div className={cn(defaultSpaceY, "text-slate-500")}>
          <div className={cn(defaultSpaceY, "space-y-12")}>
            {/* brand */}
            <div
              className={cn(defaultFlex, "justify-between", "text-slate-600")}
            >
              <MenuNavbar />
            </div>

            {/* step */}
            <ul className={cn(defaultFlex, "gap-7", "md:gap-14")}>
              {menus.map((menu, index) => (
                <li key={index} className="hover:text-primary">
                  <Link href={`/creation/${menu.link}`} className={menu.title}>
                    <div className={cn(defaultFlex, "gap-2")}>
                      {menu.icon}
                      <p>{menu.title}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {children}
        </div>
      </section>
    </>
  );
}
