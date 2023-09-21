import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

import { cn } from "@/lib/utils";

// css
const defaultSpaceY = ["space-y-12"];

// data
const menus = [
  {
    title: "Produk",
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
    title: "Info",
    listMenu: [
      {
        menu: "Panduan",
        link: "/guidance",
      },
      {
        menu: "Fitur",
        link: "/feature",
      },
      {
        menu: "FAQ",
        link: "/faq",
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
        menu: "Kibajakan Privacy",
        link: "/privacy",
      },
      {
        menu: "Syarat dan Ketentuan",
        link: "/terms",
      },
      {
        menu: "Terms",
        link: "/about",
      },
      {
        menu: "Contact",
        link: "/contact",
      },
    ],
  },
];

export default function Footer() {
  return (
    <>
      <footer className={cn(defaultSpaceY)}>
        <div className="grid grid-cols-4 gap-5">
          {/* brand */}
          <div className={cn(defaultSpaceY, "space-y-5", "border")}>
            <h2 className="font-semibold text-2xl">Wedding</h2>
            <p>
              Wedding adalah platform atau website undangan pernikahan online
              yang dapat membantu Anda membuat undangan pernikahan digital untuk
              pernikahan impian Anda.
            </p>
          </div>

          {/* menu */}
          {menus.map((menu, index) => (
            <div
              key={index}
              className={cn(defaultSpaceY, "space-y-5", "border")}
            >
              {/* title */}
              <h3 className="font-medium">{menu.title}</h3>
              {/* list */}
              <ul>
                {menu.listMenu.map((item, index) => (
                  <li key={index}>
                    <Link href={item.link}>{item.menu}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* credit */}
        <div className="flex justify-between border">
          <p>© {new Date().getFullYear()} Wedding. All rights reserved</p>

          {/* social */}
          <div className="flex gap-5">
            <Link href="/">
              <Instagram />
            </Link>
            <Link href="/">
              <Facebook />
            </Link>
            <Link href="/">
              <Twitter />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
