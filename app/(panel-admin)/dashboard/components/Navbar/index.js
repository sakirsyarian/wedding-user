import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

import MenuNavbar from "./menu";
import BurgerMenuNavbar from "./burger-menu";
import SubMenuNavbar from "./sub-menu";

// css
const defaultPadding = ["px-5", "py-3"];
const defaultFlex = ["flex", "items-center", "justify-between", "gap-8"];

export default function Navbar() {
  return (
    <>
      <nav className="top-0 z-10 sticky bg-white border">
        <div className={cn(defaultPadding, "md:container")}>
          <div className={cn(defaultFlex, "text-slate-600")}>
            <MenuNavbar />
          </div>
        </div>
        <Separator />
        <div className={cn(defaultPadding, "py-2", "md:container")}>
          <div className="hidden md:block">
            <SubMenuNavbar />
          </div>
          <div className="md:hidden ">
            <BurgerMenuNavbar />
          </div>
        </div>
      </nav>
    </>
  );
}
