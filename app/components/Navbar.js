import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// css
const defaultFlex = ["flex", "items-center", "justify-between", "gap-8"];
const defaultColor = ["text-amber-500"];
const defaultHover = ["hover:text-amber-500"];

export default function Navbar() {
  return (
    <>
      <nav className="top-0 z-10 sticky bg-white">
        <div className="container py-5">
          <div className={cn(defaultFlex, "text-slate-600")}>
            {/* brand */}
            <div className="font-bold uppercase">
              <Link href="/" className={cn(defaultColor, "text-lg")}>
                Wedding
              </Link>
            </div>

            {/* menu */}
            <ul className={cn(defaultFlex, "font-semibold")}>
              <li>
                <Link className={cn(defaultHover)} href="/#feature">
                  Fitur
                </Link>
              </li>
              <li>
                <Link className={cn(defaultHover)} href="/#template">
                  Tema
                </Link>
              </li>
              <li>
                <Link className={cn(defaultHover)} href="/#testimoni">
                  Testimoni
                </Link>
              </li>
              <li>
                <Link className={cn(defaultHover)} href="/#price">
                  Harga
                </Link>
              </li>
            </ul>

            {/* auth */}
            <div className={cn(defaultFlex, "gap-5")}>
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
          </div>
        </div>
      </nav>
    </>
  );
}
