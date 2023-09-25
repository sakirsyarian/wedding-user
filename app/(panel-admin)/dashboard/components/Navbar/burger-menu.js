import Link from "next/link";
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

// css
const defaultHover = ["hover:text-amber-500"];

export default function BurgerMenuNavbar() {
  return (
    <>
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
              <Link href="/login">
                <Button
                  className="w-full font-normal text-base"
                  variant="outlinePrimary"
                >
                  Login
                </Button>
              </Link>
              <Link href="/register">
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
    </>
  );
}
