import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// css
const defaultFlex = ["flex", "items-center", "justify-between", "gap-8"];
const defaultSpaceY = ["space-y-10"];

export default function Hero() {
  return (
    <>
      <div className={cn(defaultFlex, "border")}>
        {/* left */}
        <div className={cn(defaultSpaceY)}>
          {/* description */}
          <div className={cn(defaultSpaceY, "space-y-5")}>
            <h1 className="font-semibold text-4xl text-slate-600">
              Undangan Website
            </h1>
            <p>
              Undang orang terdekatmu dengan mudah, praktis dan tanpa ada
              batasan menggunakan Undangan Website kekinian dari Undangan
              Digitail ID
            </p>
          </div>

          {/* call to action */}
          <div className={cn(defaultFlex, "justify-start", "gap-5")}>
            <Button className="text-base" variant="primary" size="md">
              Buat Sekarang
            </Button>
            <Button className="text-base" variant="primary" size="md">
              Lihat Tema
            </Button>
          </div>
        </div>

        {/* right */}
        <div className="">
          <Image src="/img/hero/hero.png" alt="hero" width={800} height={800} />
        </div>
      </div>
    </>
  );
}
