import Link from "next/link";
import Image from "next/image";

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

export default function MenuNavbar() {
  return (
    <>
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
      <div className="">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>S</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-5 md:mr-0 p-3 w-52 space-y-2">
            <DropdownMenuLabel>Ahmad Sarian</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}
