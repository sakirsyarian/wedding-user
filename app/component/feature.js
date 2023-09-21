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

// css
const defaultSpaceY = ["space-y-12"];

// data
const whyMe = [
  {
    icon: <Users />,
    title: "Nama Tamu",
    description: "Menampilkan nama tamu yang diundang agar terasa lebih dekat",
  },
  {
    icon: <BookMarked />,
    title: "Buku Tamu",
    description:
      "Dapat menerima ucapan dan doa serta status kehadiran dari tamu undangan",
  },
  {
    icon: <Wallet2 />,
    title: "Amplop Digital",
    description: "Tamu dapat memberikan amplop langsung secara digital",
  },
  {
    icon: <MapPin />,
    title: "Penunjuk Lokasi",
    description: "Dapat menunjukkan dan mengarahkan tamu ke lokasi acara",
  },
  {
    icon: <ImageIcon />,
    title: "Galeri Foto",
    description: "Bagikan momen bahagia Kamu kepada tamu undangan",
  },
  {
    icon: <Music />,
    title: "Background Musik",
    description: "Hiasi undangan pernikahan online dengan musik kesukaanmu",
  },
  {
    icon: <Timer />,
    title: "Sesi Tamu",
    description: "Atur sesi kedatangan untuk setiap tamu yang diundang",
  },
  {
    icon: <Tv />,
    title: "Live Streaming",
    description: "Bagikan momen bahagia kepada tamu yang tidak dapat hadir",
  },
];

export default function Feature() {
  return (
    <>
      <div className={cn(defaultSpaceY, "border")}>
        {/* heading */}
        <div className={cn(defaultSpaceY, "space-y-5", "text-center")}>
          <h2 className="font-semibold text-2xl">Fitur Terbaik</h2>
          <p>
            Fitur undangan pernikahan online unggulan yang siap kamu gunakan
          </p>
        </div>

        {/* content */}
        <div className="grid grid-cols-4 gap-5">
          {whyMe.map((item, index) => (
            <div key={index} className={cn(defaultSpaceY, "space-y-3")}>
              {/* title */}
              <div className="flex gap-3">
                {item.icon}
                <h3 className="font-medium">{item.title}</h3>
              </div>

              {/* description */}
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
