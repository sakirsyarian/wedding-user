import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

// data
const menus = [
  {
    title: "Menu",
    listMenu: [
      {
        menu: "Tema",
        link: "/theme",
      },
      {
        menu: "Harga",
        link: "/price",
      },
      {
        menu: "Testimoni",
        link: "/testimoni",
      },
      {
        menu: "Blog",
        link: "/blog",
      },
    ],
  },
  {
    title: "Informasi",
    listMenu: [
      {
        menu: "FAQ",
        link: "/faq",
      },
      {
        menu: "Fitur",
        link: "/feature",
      },
      {
        menu: "Panduan",
        link: "/guidance",
      },
      {
        menu: "Sitemap",
        link: "/sitemap",
      },
    ],
  },
  {
    title: "Dukungan",
    listMenu: [
      {
        menu: "Contact",
        link: "/contact",
      },
      {
        menu: "Tentang Kami",
        link: "/about",
      },
      {
        menu: "Kebijakan Privacy",
        link: "/privacy",
      },
      {
        menu: "Syarat dan Ketentuan",
        link: "/terms",
      },
    ],
  },
];

// css
const defaultSpaceY = ["space-y-10"];
const defaultFlex = [
  "flex",
  "flex-col",
  "md:flex-row",
  "items-center",
  "justify-between",
  "md:gap-20",
];

export default function Footer() {
  return (
    <>
      <footer className="border">
        <div className="px-5 py-5 md:container">
          <div className={cn(defaultSpaceY, "space-y-2")}>
            {/* <div className="flex gap-20"> */}
            <div className={cn(defaultFlex)}>
              {/* brand */}
              <div
                className={cn(
                  defaultSpaceY,
                  "md:w-[800px]",
                  "py-5",
                  "space-y-5"
                )}
              >
                <h2 className="font-semibold text-2xl">Wedding</h2>
                <p>
                  Wedding adalah platform undangan pernikahan online yang dapat
                  membantu membuat undangan pernikahan digital untuk pernikahan
                  impian Anda.
                </p>
              </div>

              {/* menu */}
              <div
                className={cn(
                  defaultFlex,
                  "items-start",
                  "md:items-center",
                  "w-full"
                )}
              >
                {menus.map((menu, index) => (
                  <div
                    key={index}
                    className={cn(defaultSpaceY, "py-5", "space-y-5")}
                  >
                    {/* title */}
                    <h3 className="font-medium">{menu.title}</h3>
                    {/* list */}
                    <ul className={cn(defaultSpaceY, "space-y-2")}>
                      {menu.listMenu.map((item, index) => (
                        <li key={index}>
                          <Link href={item.link}>{item.menu}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* credit */}
            <div className={cn(defaultFlex, "py-5", "gap-5")}>
              <p>© {new Date().getFullYear()} Wedding. All rights reserved</p>

              {/* social */}
              <div className="flex gap-5">
                <Link href="/" className="p-2 border">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="/" className="p-2 border">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="/" className="p-2 border">
                  <Twitter className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
