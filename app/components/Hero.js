import Image from "next/image";
import { ChevronsDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// css
const defaultFlex = [
  "flex",
  "flex-col",
  "md:flex-row",
  "items-center",
  "justify-between",
  "gap-8",
];
const defaultSpaceY = ["space-y-10"];

export default function Hero() {
  return (
    <>
      <section id="hero">
        <div className="px-5 py-24 md:container">
          <div className={cn(defaultFlex, "flex-col-reverse")}>
            {/* left */}
            <div className={cn(defaultSpaceY)}>
              {/* description */}
              <div className={cn(defaultSpaceY, "space-y-5")}>
                <h1 className="font-semibold text-4xl text-slate-600">
                  Undangan Website
                </h1>
                <p>
                  Undang orang terdekatmu dengan mudah, praktis dan tanpa ada
                  batasan menggunakan undangan website kekinian dari undangan
                  Weeding
                </p>
              </div>

              {/* call to action */}
              <div className={cn(defaultSpaceY)}>
                <div className={cn(defaultFlex, "justify-start", "gap-5")}>
                  <Link href="/" className="w-full md:w-auto">
                    <Button className="w-full text-base" variant="primary">
                      Buat Undangan
                    </Button>
                  </Link>
                  <Link href="/" className="w-full md:w-auto">
                    <Button className="w-full text-base" variant="ghostPrimary">
                      Lihat Tema
                      <ChevronsDown className="ml-2 h-4 w-4 animate-bounce" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* right */}
            <div>
              <Image
                src="/img/hero/hero.png"
                alt="hero"
                width={800}
                height={800}
                priority={true}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
