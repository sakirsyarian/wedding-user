import { Zap, Wallet, Palette, ThumbsUp, MessageCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// data
const chooses = [
  {
    icon: <Wallet className="w-7 h-7" />,
    title: "Harga Kompetitif",
    description:
      "Buat undangan pernikahan tidak pernah semudah dan semurah ini",
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Proses Cepat",
    description:
      "Pembuatan undangan hanya butuh waktu 10 menit serta bisa diubah kapanpun",
  },
  {
    icon: <ThumbsUp className="w-7 h-7" />,
    title: "Fitur Lengkap",
    description:
      "Punya banyak fitur yang handal dan bisa mempermudah kamu dan tamu undangan",
  },
  {
    icon: <Palette className="w-7 h-7" />,
    title: "Tema Beragam",
    description:
      "Tersedia banyak pilihan tema yang bisa di sesuaikan dengan selera kamu",
  },
  {
    icon: <MessageCircle className="w-7 h-7" />,
    title: "Support Terbaik",
    description:
      "Tim kami selalu bisa dihubungi dan diandalkan, ketika kamu perlu bantuan",
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
  "justify-center mx-auto ",
  "gap-5",
];

export default function Choose() {
  return (
    <>
      <section id="choose">
        <div className="px-5 py-24 md:container">
          <div className={cn(defaultSpaceY)}>
            {/* heading */}
            <div className={cn(defaultSpaceY, "space-y-5", "text-center")}>
              <p className={cn(defaultMiniHead)}>Kenapa Kami</p>
              <h2 className={cn(defaultHead)}>Mengapa Memilih Andaring?</h2>
              <p>
                Kami hadir sebagai sebuah solusi untuk membantu kedua mempelai
                yang
                <br className="hidden md:block" />
                sedang berbahagia untuk membuat undangan pernikahan online
                dengan cepat dan mudah
              </p>
            </div>

            {/* content */}
            <div className={cn(defaultGrid)}>
              {chooses.map((choose, index) => (
                <Card key={index} className={cn(defaultCard)}>
                  <CardHeader className="flex gap-3">
                    <span className="text-primary">{choose.icon}</span>
                    <CardTitle className="text-xl">{choose.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{choose.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
