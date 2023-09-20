import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

// css
const defaultFlex = ["flex", "items-center", "justify-between", "gap-8"];

export default function Hero() {
  return (
    <>
      <div className={cn(defaultFlex)}>
        {/* left */}
        <div className="space-y-5 border">
          <h1 className="text-3xl">Undangan Pernikahan Online</h1>
          <p>
            Dikemas dalam bentuk website yang menarik serta dapat dibagikan
            kapanpun dan dimanapun. Simple, 5 menit undangan selesai 😉
          </p>
          <Button className="text-base" variant="primary" size="md">
            Buat Sekarang
          </Button>
        </div>

        {/* right */}
        <div className="border">
          <Image src="/img/hero.png" alt="hero" width={500} height={500} />
        </div>
      </div>
    </>
  );
}
