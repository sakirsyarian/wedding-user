import { CheckCircle2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

// data
const prices = [
  {
    tier: "Basic",
    description: "Paket gratis dengan beberapa fitur yang minimalis.",
    money: "Gratis",
    diskon: "",
    features: [
      "Google Maps",
      "Google Calendar",
      "Unlimited Tamu",
      "Countdown Acara",
      "Masa Aktif Selamanya",
    ],
  },
  {
    tier: "Premium",
    description:
      "Paket yang mempunyai fitur berguna untuk undangan pernikahan online.",
    money: "Rp 99.000",
    diskon: "Rp 79.000",
    features: [
      "Paket Basic ++",
      "Love Story",
      "Amplop Digital",
      "Background Musik",
      "Konfirmasi Kehadiran",
    ],
  },
  {
    tier: "Platinum",
    description:
      "Paket rekomendasi dengan fitur lengkap untuk pernikahan impianmu.",
    money: "Rp 199.000",
    diskon: "Rp 149.000",
    features: [
      "Paket Premium ++",
      "Live Streaming",
      "Daftar Tamu",
      "Share WhatsApp",
      "Gallery Foto & Video",
      "Statistik Pengunjung",
    ],
  },
];

// css
const defaultSpaceY = ["space-y-16"];
const defaultMiniHead = ["uppercase", "font-semibold", "text-primary"];
const defaultHead = [
  "font-semibold",
  "text-2xl",
  "md:text-3xl",
  "text-tertiary",
];
const defaultCard = ["text-slate-500", "shadow-md", "border-0"];
const defaultGrid = [
  "grid",
  "grid-cols-1",
  "md:grid-cols-2",
  "lg:grid-cols-3",
  "gap-5",
];

export default function Price() {
  return (
    <>
      <section id="price">
        <div className="px-5 py-24 md:container">
          <div className={cn(defaultSpaceY)}>
            {/* heading */}
            <div className={cn(defaultSpaceY, "space-y-5", "text-center")}>
              <p className={cn(defaultMiniHead)}>Paket Harga</p>
              <h2 className={cn(defaultHead)}>Harga Undangan Digital</h2>
              <p>
                Pilih paket undangan pernikahan online sesuai dengan
                kebutuhanmu.
                <br className="hidden md:block" />
                Anda dapat merubah jenis paket kapanpun, jadi coba gratis saja
                dulu.
              </p>
            </div>

            {/* content */}
            <div className={cn(defaultGrid)}>
              {prices.map((price, index) => (
                <Card key={index} className={cn(defaultCard, "p-5")}>
                  <CardHeader className="space-y-5">
                    <div className={cn(defaultSpaceY, "space-y-2")}>
                      <p className="font-semibold text-xl">{price.tier}</p>
                      <p>{price.description}</p>
                    </div>
                    <div className={cn(defaultSpaceY, "space-y-2")}>
                      <CardDescription className="line-through text-red-500">
                        {price.diskon}
                      </CardDescription>
                      <CardTitle>{price.money}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className={cn(defaultSpaceY, "space-y-3")}>
                    {price.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                        <p>{feature}</p>
                      </div>
                    ))}
                  </CardContent>
                  <CardFooter>
                    <Link href="/" className="w-full">
                      <Button className="w-full" variant="primary">
                        Pesan Sekarang
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
