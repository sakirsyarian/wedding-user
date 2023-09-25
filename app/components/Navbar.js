import Link from "next/link";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// css
const defaultFlex = ["flex", "items-center", "justify-between", "gap-8"];
const defaultColor = ["text-amber-500"];
const defaultHover = ["hover:text-amber-500"];

export default function Navbar() {
  return (
    <>
      <nav className="top-0 z-10 sticky bg-white">
        <div className="px-5 py-5 md:container">
          <div className={cn(defaultFlex, "text-slate-600")}>
            {/* brand */}
            <div className="font-bold uppercase">
              <Link href="/" className={cn(defaultColor, "text-lg")}>
                Wedding
              </Link>
            </div>

            {/* menu */}
            <div
              className={cn(defaultFlex, "font-semibold", "hidden", "md:flex")}
            >
              <Link className={cn(defaultHover)} href="/#feature">
                Fitur
              </Link>
              <Link className={cn(defaultHover)} href="/#template">
                Tema
              </Link>
              <Link className={cn(defaultHover)} href="/#testimoni">
                Testimoni
              </Link>
              <Link className={cn(defaultHover)} href="/#price">
                Harga
              </Link>
            </div>

            {/* auth */}
            <div className={cn(defaultFlex, "gap-5", "hidden", "md:flex")}>
              <Link href="/">
                <Button
                  className="rounded-full text-base"
                  variant="outlinePrimary"
                >
                  Login
                </Button>
              </Link>

              <Link href="/">
                <Button className="rounded-full text-base" variant="primary">
                  Register
                </Button>
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
                      <Link href="/">Wedding</Link>
                    </SheetTitle>
                  </SheetHeader>
                  {/* menu */}
                  <div className="mt-8 flex flex-col gap-5 text-slate-600">
                    <Link className={cn(defaultHover)} href="/#feature">
                      Fitur
                    </Link>
                    <Link className={cn(defaultHover)} href="/#template">
                      Tema
                    </Link>
                    <Link className={cn(defaultHover)} href="/#testimoni">
                      Testimoni
                    </Link>
                    <Link className={cn(defaultHover)} href="/#price">
                      Harga
                    </Link>
                    <Link href="/">
                      <Button
                        className="w-full font-normal text-base"
                        variant="outlinePrimary"
                      >
                        Login
                      </Button>
                    </Link>
                    <Link href="/">
                      <Button
                        className="w-full font-normal text-base"
                        variant="primary"
                      >
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
