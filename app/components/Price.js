import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

// css
const defaultSpaceY = ["space-y-12"];

// data
const prices = [
  {
    tier: "Basic",
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

export default function Price() {
  return (
    <>
      <section id="price" className="border">
        <div className="container py-10">
          <div className={cn(defaultSpaceY, "border")}>
            {/* heading */}
            <div className={cn(defaultSpaceY, "space-y-5", "text-center")}>
              <h2 className="font-semibold text-2xl">Harga Undangan</h2>
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
                <div key={index} className={cn(defaultSpaceY, "space-y-3")}>
                  {/* title */}
                  <h3 className="font-medium">{price.tier}</h3>
                  {/* description */}
                  {price.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5" />
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
