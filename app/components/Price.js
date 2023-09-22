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
      "Amplop Digital",
      "Hitung Mundur Acara",
      "Kutipan Kata",
      "Musik Latar",
      "3 Foto dan 1 Video",
      "Aktif 2 Hari",
    ],
  },
  {
    tier: "Premium",
    description:
      "Paket dengan beberapa fitur berguna untuk undangan pernikahan online Anda.",
    money: "Rp. 99.000",
    diskon: "Rp. 79.000",
    features: [
      "Paket Basic Tambah ++",
      "10 Foto dan 1 Video",
      "Aktif 3 Bulan",
      "Google Maps",
      "Google Maps",
      "Cerita Cinta",
      "Unlimited Tamu",
      "Buku Tamu",
    ],
  },
  {
    tier: "Platinum",
    description:
      "Paket rekomendasi dengan fitur paling lengkap untuk pernikahan impianmu.",
    money: "Rp. 199.000",
    diskon: "Rp 149.000",
    features: [
      "Paket Premium Tambah ++",
      "30 Foto 3 Video",
      "Aktif 1 Tahun",
      "Share Whatsapp",
      "Live Streaming",
      "Download Amplop",
    ],
  },
];

// css
const defaultSpaceY = ["space-y-16"];
const defaultMiniHead = ["uppercase", "font-semibold", "text-amber-500"];
const defaultHead = ["font-semibold", "text-3xl"];

export default function Price() {
  return (
    <>
      <section id="price">
        <div className="container py-24">
          <div className={cn(defaultSpaceY)}>
            {/* heading */}
            <div className={cn(defaultSpaceY, "space-y-5", "text-center")}>
              <p className={cn(defaultMiniHead)}>Paket Harga</p>
              <h2 className={cn(defaultHead)}>Harga Undangan Digital</h2>
              <p>
                Pilih paket undangan pernikahan online sesuai dengan
                kebutuhanmu,
                <br />
                tenang harganya terjangkau banget
              </p>
            </div>

            {/* content */}
            <div className="grid grid-cols-3 gap-5">
              {prices.map((price, index) => (
                <Card key={index} className="text-slate-500 border-0">
                  <CardHeader className="space-y-5">
                    <div className="space-y-2">
                      <p className="font-semibold text-xl">{price.tier}</p>
                      <p>{price.description}</p>
                    </div>
                    <div className="space-y-2">
                      <CardDescription className="line-through text-red-500">
                        {price.diskon}
                      </CardDescription>
                      <CardTitle>{price.money}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {price.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                        <p>{feature}</p>
                      </div>
                    ))}
                  </CardContent>
                  <CardFooter>
                    <Link href="/">
                      <Button className="text-base" variant="primary">
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
