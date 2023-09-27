import { Flower, Layout, CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
    icon: <Layout className="w-5 h-5" />,
  },
];

// css
const defaultSpaceY = ["space-y-16"];
const defaultFlex = ["flex", "items-center", "justify-evenly"];
const defaultCard = ["p-6", "rounded-lg", "shadow-md", "bg-white"];

export default function LayoutCreation({ children }) {
  return (
    <>
      <section className="px-5 py-10 md:container">
        <div className={cn(defaultSpaceY, "text-slate-500")}>
          <div className={cn(defaultSpaceY, "space-y-10")}>
            {/* brand */}
            <div className="font-semibold">
              <Link href="/" className="text-xl text-amber-500">
                Wedding
              </Link>
            </div>

            {/* step */}
            <div className={cn(defaultCard, "text-lg")}>
              <ul className={cn(defaultFlex)}>
                {menus.map((menu, index) => (
                  <li key={index}>
                    <div className={cn(defaultFlex, "gap-2")}>
                      {menu.icon}
                      <Link
                        href={`/creation/${menu.link}`}
                        className={menu.title}
                      >
                        {menu.title}
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {children}
        </div>
      </section>
    </>
  );
}
