import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// css
const defaultFlex = ["flex", "items-center", "justify-between", "gap-8"];

export default function Navbar() {
  return (
    <>
      <nav className="top-0 sticky bg-white scrolled border">
        <div className="container">
          <div className={cn(defaultFlex, "py-5", "text-slate-600")}>
            {/* brand */}
            <div className="font-bold uppercase">
              <Link href="/" className="text-lg text-amber-500">
                Wedding
              </Link>
            </div>

            {/* menu */}
            <ul className={cn(defaultFlex, "font-semibold")}>
              <li>
                <Link href="/#feature">Fitur</Link>
              </li>
              <li>
                <Link href="/#template">Tema</Link>
              </li>
              <li>
                <Link href="/#testimoni">Testimoni</Link>
              </li>
              <li>
                <Link href="/#price">Harga</Link>
              </li>
            </ul>

            {/* auth */}
            <div className={cn(defaultFlex, "gap-5")}>
              <Link href="/">
                <Button
                  className="rounded-full font-semibold text-base"
                  variant="outlinePrimary"
                  size="md"
                >
                  Login
                </Button>
              </Link>
              <Link href="/">
                <Button
                  className="rounded-full font-semibold text-base"
                  variant="primary"
                  size="md"
                >
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
