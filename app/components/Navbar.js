import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// css
const defaultFlex = ["flex", "items-center", "justify-between", "gap-8"];

export default function Navbar() {
  return (
    <>
      <nav className="border">
        <div className="container">
          <div className={cn(defaultFlex, "py-5", "text-slate-600")}>
            {/* brand */}
            <Link href="/" className="font-bold uppercase text-lg">
              Wedding
            </Link>

            {/* menu */}
            <div className={cn(defaultFlex)}>
              {/* list */}
              <ul className={cn(defaultFlex, "font-medium")}>
                <li>
                  <Link href="/#feature">Fitur</Link>
                </li>
                <li>
                  <Link href="/#template">Desain</Link>
                </li>
                <li>
                  <Link href="/#testimoni">Testimoni</Link>
                </li>
                <li>
                  <Link href="/#price">Harga</Link>
                </li>
              </ul>

              {/* auth */}
              <Link href="/">
                <Button className="text-base" variant="primary" size="md">
                  Daftar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
