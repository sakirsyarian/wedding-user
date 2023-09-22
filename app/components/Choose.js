import { Zap, Wallet, ThumbsUp, MessageCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// data
const chooses = [
  {
    icon: <Wallet />,
    title: "Harga Kompetitif",
    description:
      "Buat undangan pernikahan tidak pernah semudah dan semurah ini",
  },
  {
    icon: <Zap />,
    title: "Proses Cepat",
    description:
      "Proses pembuatan undangan hanya memerlukan waktu 5 menit serta dapat diubah kapanpun",
  },
  {
    icon: <ThumbsUp />,
    title: "Fitur Lengkap",
    description:
      "Fitur yang dapat diandalkan mulai dari proses pembuatan undangan hingga proses membagikan undangan",
  },
  {
    icon: <MessageCircle />,
    title: "Support Terbaik",
    description:
      "Perlu bantuan ? tenang tim support Kami selalu bisa diandalkan",
  },
];

// css
const defaultSpaceY = ["space-y-16"];
const defaultMiniHead = ["uppercase", "font-semibold", "text-amber-500"];
const defaultHead = ["font-semibold", "text-3xl"];

export default function Choose() {
  return (
    <>
      <section id="choose" className="bg-amber-50/50 border">
        <div className={cn(defaultSpaceY, "container py-24")}>
          <div className={cn(defaultSpaceY)}>
            {/* heading */}
            <div className={cn(defaultSpaceY, "space-y-5", "text-center")}>
              <p className={cn(defaultMiniHead)}>Kenapa Kami</p>
              <h2 className={cn(defaultHead)}>Mengapa Memilih Weeding.id ?</h2>
              <p>
                Kami hadir sebagai sebuah solusi untuk membantu calon mempelai
                yang
                <br />
                berbahagia untuk membuat undangan pernikahan online dengan cepat
                dan mudah.
              </p>
            </div>

            {/* content */}
            <div className="grid grid-cols-4 gap-5">
              {chooses.map((choose, index) => (
                <Card key={index} className="text-slate-500 border-0">
                  <CardHeader className="flex gap-3">
                    {choose.icon}
                    <CardTitle>{choose.title}</CardTitle>
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
