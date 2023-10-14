// next
import Link from "next/link";
import Image from "next/image";
import { cookies } from "next/headers";

// icon
import { User2, Wallet2, Settings } from "lucide-react";

// custom components
import Logout from "./Logout";

// ui components
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// css
const defaultColor = ["text-amber-500"];
const defaultPadding = ["px-5", "py-3"];
const defaultFlex = ["flex", "items-center", "justify-between", "gap-8"];

export default function Navbar() {
  const cookieStore = cookies();
  const username = cookieStore.get("username");

  return (
    <>
      <nav className="top-0 z-10 sticky bg-white border">
        <div className={cn(defaultPadding, "md:container")}>
          <div className={cn(defaultFlex, "text-slate-600")}>
            {/* brand */}
            <div className="font-bold uppercase">
              <Link href="/" className={cn(defaultColor, "text-xl")}>
                <Image
                  src="/img/logo/andaring.png"
                  width={120}
                  height={120}
                  alt="andaring"
                  style={{ width: "auto", height: "auto" }}
                />
              </Link>
            </div>

            {/* account */}
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>S</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mr-5 md:mr-0 p-3 w-52 space-y-2 text-slate-500">
                <DropdownMenuLabel>
                  <p className="text-base text-slate-600">{username.value}</p>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link className="flex" href="/dashboard">
                    <User2 className="mr-2 w-[18px] h-[18px]" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link className="flex" href="/dashboard">
                    <Wallet2 className="mr-2 w-[18px] h-[18px]" />
                    Billing
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link className="flex" href="/dashboard">
                    <Settings className="mr-2 w-[18px] h-[18px]" />
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Logout />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </>
  );
}
