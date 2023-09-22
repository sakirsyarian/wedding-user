import Image from "next/image";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// data
const testimonials = [
  {
    photo: "lilis.jpg",
    name: "Kim Nadthilya",
    testimoni:
      "Terima kasih Seremoni udah bantu buatin undangan pernikahan digital kita. Prosesnya cepet banget, hasilnya juga bagus. Recommended!",
  },
  {
    photo: "lilis.jpg",
    name: "Fajar Cakrawinata",
    testimoni:
      "Seremoni mantap. Harga ekonomis tapi fitur dan undangannya sangat mewah dan ekslusif. Makasih juga buat adminnya yang sangat ramah",
  },
  {
    photo: "lilis.jpg",
    name: "Wina Nurani",
    testimoni:
      "Fitur undangannya cukup lengkap. Jadi gak perlu bingung lagi milih undangan digital dimana. Thanks Seremoni",
  },
];

// css
const defaultSpaceY = ["space-y-16"];
const defaultMiniHead = ["uppercase", "font-semibold", "text-amber-500"];
const defaultHead = ["font-semibold", "text-3xl"];

export default function Testimoni() {
  return (
    <>
      <section id="testimoni">
        <div className="container py-24">
          <div className={cn(defaultSpaceY)}>
            {/* heading */}
            <div className={cn(defaultSpaceY, "space-y-5", "text-center")}>
              <p className={cn(defaultMiniHead)}>Testimonial</p>
              <h2 className={cn(defaultHead)}>Mereka Mempercayai Kami</h2>
              <p>
                Inveet telah dipercaya oleh 420,056 pengguna. Serta telah
                terkirim ke 10,721,897 tamu, <br /> total biaya percetakan yang
                dihemat mencapai Rp. 42.887.588.000
              </p>
            </div>

            {/* content */}
            <div className="grid grid-cols-3 gap-5">
              {testimonials.map((testimoni, index) => (
                <Card key={index} className="text-slate-500 border-0">
                  <CardHeader className="flex flex-row items-center gap-5">
                    <Image
                      src={`/img/testimoni/${testimoni.photo}`}
                      width={50}
                      height={50}
                      alt={testimoni.name}
                      className="rounded-full"
                    />
                    <CardTitle className="text-lg">{testimoni.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{testimoni.testimoni}</p>
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
