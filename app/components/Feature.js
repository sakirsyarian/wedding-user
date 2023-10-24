import {
  Mail,
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
    icon: <Mail className="w-8 h-8" />,
    title: "Share Whatsapp",
    description: "Mempermudah kamu membagikan undangan melalui whatsapp",
  },
  {
    icon: <BookMarked className="w-8 h-8" />,
    title: "Buku Tamu",
    description:
      "Menerima ucapan dan doa serta status kehadiran dari tamu undangan",
  },
  {
    icon: <Wallet2 className="w-8 h-8" />,
    title: "Amplop Digital",
    description: "Tamu undangan bisa memberikan amplop langsung secara digital",
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Navigasi Maps:",
    description: "Petunjuk maps yang dapat mempermudah tamu menuju ke lokasi",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Nama Tamu",
    description: "Menampilkan nama tamu yang diundang agar terasa special",
  },
  {
    icon: <Music className="w-8 h-8" />,
    title: "Background Musik",
    description: "Hiasi undangan online kamu dengan musik favorit",
  },
  {
    icon: <ImageIcon className="w-8 h-8" />,
    title: "Galeri Foto",
    description: "Bagikan momen kebahagiaan kamu kepada tamu undangan",
  },
  {
    icon: <Timer className="w-8 h-8" />,
    title: "Countdown Timer",
    description: "Hitung mundur ke momen paling indah hidup kamu",
  },
];

// css
const defaultSpaceY = ["space-y-16"];
const defaultMiniHead = ["uppercase", "font-semibold", "text-amber-500"];
const defaultHead = [
  "font-semibold",
  "text-2xl",
  "md:text-3xl",
  "text-tertiary",
];
const defaultGrid = [
  "grid",
  "grid-cols-1",
  "md:grid-cols-2",
  "lg:grid-cols-4",
  "gap-5",
];

export default function Feature() {
  return (
    <>
      <section id="feature">
        <div className="px-5 py-24 md:container">
          <div className={cn(defaultSpaceY)}>
            {/* heading */}
            <div className={cn(defaultSpaceY, "space-y-5", "text-center")}>
              <p className={cn(defaultMiniHead, "text-primary")}>
                Fitur Wedding
              </p>
              <h2 className={cn(defaultHead)}>Fitur Unggulan Andaring</h2>
              <p>
                Berikut Fitur-fitur undangan pernikahan online kami yang
                <br className="hidden md:block" />
                menarik, unggul dari yang lain dan siap Anda gunakan dengan
                mudah
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
                    <div className="mx-auto p-3 rounded-md bg-yellow-100/20 text-primary">
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
