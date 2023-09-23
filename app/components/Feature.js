import {
  Tv,
  MapPin,
  Users,
  Music,
  Timer,
  Wallet2,
  BookMarked,
  Image as ImageIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

// data
const features = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Nama Tamu",
    description: "Menampilkan nama tamu yang diundang agar terasa lebih dekat",
  },
  {
    icon: <BookMarked className="w-8 h-8" />,
    title: "Buku Tamu",
    description:
      "Dapat menerima ucapan dan doa serta status kehadiran dari tamu undangan",
  },
  {
    icon: <Wallet2 className="w-8 h-8" />,
    title: "Amplop Digital",
    description: "Tamu dapat memberikan amplop langsung secara digital",
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Penunjuk Lokasi",
    description: "Dapat menunjukkan dan mengarahkan tamu ke lokasi acara",
  },
  {
    icon: <ImageIcon className="w-8 h-8" />,
    title: "Galeri Foto",
    description: "Bagikan momen bahagia Kamu kepada tamu undangan",
  },
  {
    icon: <Music className="w-8 h-8" />,
    title: "Background Musik",
    description: "Hiasi undangan pernikahan online dengan musik kesukaanmu",
  },
  {
    icon: <Timer className="w-8 h-8" />,
    title: "Sesi Tamu",
    description: "Atur sesi kedatangan untuk setiap tamu yang diundang",
  },
  {
    icon: <Tv className="w-8 h-8" />,
    title: "Live Streaming",
    description: "Bagikan momen bahagia kepada tamu yang tidak dapat hadir",
  },
];

// css
const defaultSpaceY = ["space-y-16"];
const defaultMiniHead = ["uppercase", "font-semibold", "text-amber-500"];
const defaultHead = ["font-semibold", "text-3xl"];
const defaultGrid = ["grid", "grid-cols-4", "gap-5"];

export default function Feature() {
  return (
    <>
      <section id="feature">
        <div className="container py-24">
          <div className={cn(defaultSpaceY)}>
            {/* heading */}
            <div className={cn(defaultSpaceY, "space-y-5", "text-center")}>
              <p className={cn(defaultMiniHead)}>Fitur Wedding</p>
              <h2 className={cn(defaultHead)}>Fitur Unggulan Undangan</h2>
              <p>
                Fitur undangan pernikahan online unggulan yang siap kamu gunakan
              </p>
            </div>

            {/* content */}
            <div className={cn(defaultGrid)}>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={cn(
                    defaultSpaceY,
                    "p-5",
                    "space-y-3",
                    "text-center"
                  )}
                >
                  {/* title */}
                  <div className="grid gap-3 justify-center">
                    <div className="mx-auto p-3 bg-amber-500/5 text-amber-500">
                      {feature.icon}
                    </div>
                    <h3 className="font-medium text-lg">{feature.title}</h3>
                  </div>

                  {/* description */}
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
