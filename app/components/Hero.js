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
      <section id="hero" className="bg-[#FBF0B2]/30">
        <div className="px-5 py-24 md:container">
          <div className={cn(defaultFlex, "flex-col-reverse")}>
            {/* left */}
            <div className={cn(defaultSpaceY)}>
              {/* description */}
              <div className={cn(defaultSpaceY, "space-y-5")}>
                <h1 className="font-semibold text-tertiary text-3xl md:text-4xl leading-10 md:leading-none">
                  <span className="text-primary">Undangan</span> Pernikahan
                  Online
                </h1>
                <p className="leading-7">
                  Buat undangan pernikahan digital Anda yang elegan, modern, &
                  <br className="hidden md:block" />
                  ramah lingkungan. Ciptakan momen kebahagian Anda bersama
                  Andaring. Hemat kertas, hemat uang & tanpa repot!
                </p>
              </div>

              {/* call to action */}
              <div className={cn(defaultSpaceY)}>
                <div className={cn(defaultFlex, "justify-start", "gap-5")}>
                  <Link href="/" className="w-full md:w-auto">
                    <Button className="w-full" variant="primary">
                      Buat Undangan
                    </Button>
                  </Link>
                  <Link href="/#template" className="w-full md:w-auto">
                    <Button
                      className="w-full text-primary hover:text-primary hover:bg-white"
                      variant="ghost"
                    >
                      <ChevronsDown className="mr-2 h-4 w-4 animate-bounce" />
                      Lihat Tema
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
