import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// data
const menus = [
  {
    name: "Fitur",
    href: "/#feature",
  },
  {
    name: "Tema",
    href: "/#theme",
  },
  {
    name: "Testimoni",
    href: "/#testimoni",
  },
  {
    name: "Harga",
    href: "/#price",
  },
];

// css
const defaultFlex = ["flex", "items-center", "justify-between", "gap-8"];
const defaultHover = ["hover:text-primary"];

export default function Navbar() {
  return (
    <>
      <nav className="top-0 z-10 sticky bg-white">
        <div className="px-5 py-5 md:container">
          <div className={cn(defaultFlex, "text-slate-600")}>
            {/* brand */}
            <div className="font-bold uppercase">
              <Link href="/" className={cn(defaultFlex, "gap-2", "text-xl")}>
                <Image
                  src="/img/logo/andaring.png"
                  width={150}
                  height={150}
                  alt="andaring"
                />
              </Link>
            </div>

            {/* menu */}
            <div className={cn(defaultFlex, "hidden", "md:flex")}>
              {menus.map((menu, index) => (
                <Link key={index} href={menu.href} className={cn(defaultHover)}>
                  {menu.name}
                </Link>
              ))}
            </div>

            {/* auth */}
            <div className={cn(defaultFlex, "gap-5", "hidden", "md:flex")}>
              <Link href="/login">
                <Button
                  className="text-primary hover:text-primary hover:bg-white"
                  variant="ghost"
                >
                  Login
                </Button>
              </Link>

              <Link href="/register">
                <Button variant="primary">Register</Button>
              </Link>
            </div>

            {/* burger */}
            <div className="md:hidden flex items-center">
              <Sheet>
                <SheetTrigger>
                  <Menu />
                </SheetTrigger>
                <SheetContent className="text-left">
                  <SheetHeader className="text-left">
                    <SheetTitle className="text-slate-600">
                      <Link href="/">
                        <Image
                          src="/img/logo/andaring.png"
                          width={150}
                          height={150}
                          alt="andaring"
                        />
                      </Link>
                    </SheetTitle>
                  </SheetHeader>
                  {/* menu */}
                  <div className="mt-8 flex flex-col gap-5 text-slate-600">
                    {menus.map((menu, index) => (
                      <Link
                        key={index}
                        href={menu.href}
                        className={cn(defaultHover)}
                      >
                        {menu.name}
                      </Link>
                    ))}

                    <Link href="/login">
                      <Button
                        className="w-full text-primary hover:text-primary hover:bg-white"
                        variant="ghost"
                      >
                        Login
                      </Button>
                    </Link>

                    <Link href="/register">
                      <Button className="w-full" variant="primary">
                        Register
                      </Button>
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
