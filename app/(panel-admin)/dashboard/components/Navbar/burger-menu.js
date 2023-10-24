// react and next
import Link from "next/link";
import Image from "next/image";

// icon
import {
  Gem,
  Home,
  Palette,
  Flower,
  Gift,
  Menu,
  Music,
  Settings,
  CalendarDays,
  ScrollText,
  Image as Gallery,
} from "lucide-react";

// ui component
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// css
const defaultHover = ["hover:text-primary"];
const defaultContent = [
  "px-3 py-2 space-y-2 w-52 absolute left-[-130px] text-slate-500",
];

export default function BurgerMenuNavbar() {
  return (
    <>
      {/* burger */}
      <div className="flex items-center">
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
              <Link className={cn(defaultHover, "flex")} href="/">
                <Home className="mr-2 w-5 h-5" />
                Beranda
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={cn(defaultHover, "flex", "text-left")}
                >
                  <Gem className="mr-2 w-5 h-5" />
                  Pernikahan
                </DropdownMenuTrigger>
                <DropdownMenuContent className={cn(defaultContent)}>
                  <DropdownMenuItem>
                    <Link href="/dashboard/bride" className="flex gap-2">
                      <Flower className="w-5 h-5" />
                      Mempelai
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/dashboard/event" className="flex gap-2">
                      <CalendarDays className="w-5 h-5" />
                      Acara
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/dashboard/gift" className="flex gap-2">
                      <Gift className="w-5 h-5" />
                      Hadiah
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/dashboard/gift" className="flex gap-2">
                      <Gallery className="w-5 h-5" />
                      Galeri
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/dashboard/gift" className="flex gap-2">
                      <Music className="w-5 h-5" />
                      Musik
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/dashboard/story" className="flex gap-2">
                      <ScrollText className="w-5 h-5" />
                      Cerita
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/dashboard/theme" className="flex gap-2">
                      <Palette className="w-5 h-5" />
                      Tema
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link className={cn(defaultHover, "flex")} href="/">
                <Settings className="mr-2 w-5 h-5" />
                Pengaturan
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
