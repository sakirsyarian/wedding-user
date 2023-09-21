import { Zap, Wallet, ThumbsUp, MessageCircle } from "lucide-react";

import { cn } from "@/lib/utils";

// css
const defaultSpaceY = ["space-y-12"];

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

export default function Choose() {
  return (
    <>
      <section id="choose" className="border">
        <div className="container py-10">
          <div className={cn(defaultSpaceY)}>
            {/* heading */}
            <div className={cn(defaultSpaceY, "space-y-5", "text-center")}>
              <h2 className="font-semibold text-2xl">
                Mengapa memilih Weeding.id ?
              </h2>
              <p>
                Kami hadir sebagai sebuah solusi untuk membantu calon mempelai
                yang
                <br />
                berbahagia untuk membuat undangan pernikahan online dengan cepat
                dan mudah.
              </p>
            </div>

            {/* content */}
            <div className="grid grid-cols-2 gap-5">
              {chooses.map((choose, index) => (
                <div key={index} className={cn(defaultSpaceY, "space-y-3")}>
                  {/* title */}
                  <div className="flex gap-3">
                    {choose.icon}
                    <h3 className="font-medium">{choose.title}</h3>
                  </div>

                  {/* description */}
                  <p>{choose.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
