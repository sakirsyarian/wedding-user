import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// css
const defaultFlex = ["flex", "items-center", "justify-between", "gap-8"];

export default function Navbar() {
  return (
    <>
      <nav className={cn(defaultFlex, "py-5", "text-slate-600", "border")}>
        {/* brand */}
        <Link href="/" className="font-bold uppercase text-lg">
          Wedding
        </Link>

        {/* menu */}
        <div className={cn(defaultFlex)}>
          {/* list */}
          <ul className={cn(defaultFlex, "font-medium")}>
            <li>
              <Link href="/">Fitur</Link>
            </li>
            <li>
              <Link href="/">Desain</Link>
            </li>
            <li>
              <Link href="/">Testimoni</Link>
            </li>
            <li>
              <Link href="/">Harga</Link>
            </li>
          </ul>

          {/* auth */}
          <Link href="/">
            <Button className="text-base" variant="primary" size="md">
              Daftar
            </Button>
          </Link>
        </div>
      </nav>
    </>
  );
}
