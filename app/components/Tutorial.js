import Image from "next/image";

import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// data
const tutorials = [
  {
    title: "Registrasi",
    description:
      "Buat akun baru dengan cara mengisikan email dan password atau daftar menggunakan akun Google.",
  },
  {
    title: "Isi Formulir",
    description:
      "Isi informasi mengenai mempelai, lokasi dan waktu acara, pilih desain undangan dan upload foto ke galeri",
  },
  {
    title: "Sebarkan",
    description:
      "Undangan telah jadi dan dapat Anda sebarkan kepada teman dan kerabat.",
  },
  {
    title: "Monitoring",
    description:
      "Pantau siapa saja yang akan datang, memberi ucapan, dan mengirim amplop.",
  },
];

// css
const defaultSpaceY = ["space-y-16"];
const defaultMiniHead = ["uppercase", "font-semibold", "text-amber-500"];
const defaultHead = ["font-semibold", "text-3xl"];
const defaultCard = ["text-slate-500", "shadow-md", "border-0"];
const defaultGrid = ["grid", "grid-cols-4", "gap-5"];

export default function Tutorial() {
  return (
    <>
      <section id="tutorial">
        <div className="container py-24">
          <div className={cn(defaultSpaceY)}>
            {/* heading */}
            <div className={cn(defaultSpaceY, "space-y-5", "text-center")}>
              <p className={cn(defaultMiniHead)}>Tutorial Wedding</p>
              <h2 className={cn(defaultHead)}>Langkah Pembuatan Undangan</h2>
              <p>
                Hanya 4 langkah dan website undangan pernikahan online kamu siap
                disebar!
              </p>
            </div>

            {/* content */}
            <div className="flex gap-5">
              <div>
                <Image
                  src="/img/hero/hero.png"
                  alt="hero"
                  width={1000}
                  height={1000}
                  priority={true}
                />
              </div>
              <div className={cn(defaultGrid, "grid-cols-2")}>
                {tutorials.map((tutorial, index) => (
                  <Card key={index} className={cn(defaultCard)}>
                    <CardHeader>
                      <CardTitle className="text-xl">
                        {tutorial.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{tutorial.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
