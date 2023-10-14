"use client";

// react and next
import * as React from "react";
import Link from "next/link";

// icon
import {
  Gem,
  Home,
  Palette,
  Flower,
  Gift,
  Music,
  Settings,
  CalendarDays,
  ScrollText,
  Image as Gallery,
} from "lucide-react";

// ui component
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// data
const menus = [
  {
    title: "Mempelai",
    href: "/dashboard/bride",
    icon: <Flower className="w-5 h-5" />,
  },
  {
    title: "Acara",
    href: "/dashboard/event",
    icon: <CalendarDays className="w-5 h-5" />,
  },
  {
    title: "Hadiah",
    href: "/dashboard/gift",
    icon: <Gift className="w-5 h-5" />,
  },
  {
    title: "Galeri",
    href: "/dashboard/gallery",
    icon: <Gallery className="w-5 h-5" />,
  },
  {
    title: "Musik",
    href: "/dashboard/music",
    icon: <Music className="w-5 h-5" />,
  },
  {
    title: "Cerita",
    href: "/dashboard/story",
    icon: <ScrollText className="w-5 h-5" />,
  },
  {
    title: "Tema",
    href: "/dashboard/theme",
    icon: <Palette className="w-5 h-5" />,
  },
];

// css
const defaultGrid = [
  "p-4",
  "grid",
  "md:grid-cols-2",
  "gap-3",
  "w-[400px]",
  "md:w-[500px]",
];

export default function SubMenuNavbar() {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/dashboard" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <Home className="mr-2 w-5 h-5" />
                Beranda
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <Gem className="mr-2 w-5 h-5" />
              <p className="mr-1">Pernikahan</p>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className={cn(defaultGrid)}>
                {menus.map((menu) => (
                  <ListItem
                    key={menu.title}
                    title={menu.title}
                    href={menu.href}
                    icon={menu.icon}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/settings" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <Settings className="mr-2 w-5 h-5" />
                Pengaturan
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

const ListItem = React.forwardRef(
  ({ className, icon, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-slate-500 hover:bg-slate-100 hover:text-slate-600 focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="flex gap-2 items-center text-sm font-medium leading-none">
              <span>{icon}</span>
              <p>{title}</p>
            </div>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
