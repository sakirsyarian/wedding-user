"use client";

import * as React from "react";
import Link from "next/link";

import {
  Home,
  Flower,
  Gift,
  Music,
  CalendarDays,
  ScrollText,
  Image as Gallery,
} from "lucide-react";

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
const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const menus = [
  {
    title: "Bride",
    href: "/dashboard/bride",
  },
  {
    title: "Event",
    href: "/dashboard/event",
  },
  {
    title: "Gift",
    href: "/dashboard/gift",
  },
  {
    title: "Gallery",
    href: "/dashboard/gallery",
  },
  {
    title: "Music",
    href: "/dashboard/music",
  },
  {
    title: "Story",
    href: "/dashboard/story",
  },
  {
    title: "Theme",
    href: "/dashboard/theme",
  },
];

// css
const defaultFlex = ["flex", "items-center", "gap-2"];

export default function SubMenuNavbar() {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/dashboard" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Dashboard
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Weddings</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="p-4 grid md:grid-cols-2 w-60 gap-3">
                {menus.map((menu) => (
                  <ListItem
                    key={menu.title}
                    title={menu.title}
                    href={menu.href}
                  >
                    {menu.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/settings" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Settings
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

// "use client";

// import {
//   Home,
//   Flower,
//   Gift,
//   Music,
//   CalendarDays,
//   ScrollText,
//   Image as Gallery,
// } from "lucide-react";

// import { cn } from "@/lib/utils";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";
// import Link from "next/link";

// // data
// const menu = [
//   {
//     title: "Bride",
//     link: "/",
//     icon: <Flower className="w-5 h-5" />,
//   },
//   {
//     title: "Event",
//     link: "/",
//     icon: <CalendarDays className="w-5 h-5" />,
//   },
//   {
//     title: "Gift",
//     link: "/",
//     icon: <Gift className="w-5 h-5" />,
//   },
//   {
//     title: "Gallery",
//     link: "/",
//     icon: <Gallery className="w-5 h-5" />,
//   },
//   {
//     title: "Music",
//     link: "/",
//     icon: <Music className="w-5 h-5" />,
//   },
//   {
//     title: "Story",
//     link: "/",
//     icon: <ScrollText className="w-5 h-5" />,
//   },
// ];

// // css
// const defaultFlex = ["flex", "items-center", "gap-2"];

// export default function SubMenuNavbar() {
//   return (
//     <>
//       <NavigationMenu>
//         <NavigationMenuList>
//           <NavigationMenuItem>
//             <NavigationMenuTrigger className="bg-slate-50">
//               <div className={cn(defaultFlex, "text-slate-600")}>
//                 <Home className="w-5 h-5" />
//                 <h2>Weddings</h2>
//               </div>
//             </NavigationMenuTrigger>
//             <NavigationMenuContent className="text-slate-500">
//               <ul className="p-3 grid gap-2 lg:w-40 text-sm">
//                 {menu.map((item, index) => (
//                   <li
//                     key={index}
//                     className={cn(defaultFlex, "p-2", "hover:bg-slate-50")}
//                   >
//                     {item.icon}
//                     <Link href={item.link}>{item.title}</Link>
//                   </li>
//                 ))}
//               </ul>
//             </NavigationMenuContent>
//           </NavigationMenuItem>
//         </NavigationMenuList>
//       </NavigationMenu>
//     </>
//   );
// }
