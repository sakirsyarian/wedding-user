import { cn } from "@/lib/utils";
import Image from "next/image";

// css
const defaultSpaceY = ["space-y-12"];

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

export default function Testimoni() {
  return (
    <>
      <div id="testimoni" className={cn(defaultSpaceY, "border")}>
        {/* heading */}
        <div className={cn(defaultSpaceY, "space-y-5", "text-center")}>
          <h2 className="font-semibold text-2xl">
            Mereka yang Mempercayai Kami
          </h2>
          <p>
            Inveet telah dipercaya oleh 420,056 pengguna. Serta telah terkirim
            ke 10,721,897 tamu, <br /> total biaya percetakan yang dihemat
            mencapai Rp. 42.887.588.000
          </p>
        </div>

        {/* content */}
        <div className="grid grid-cols-3 gap-5">
          {testimonials.map((testimoni, index) => (
            <div key={index} className={cn(defaultSpaceY, "space-y-3")}>
              {/* heading */}
              <div className="flex items-center gap-3">
                <Image
                  src={`/img/testimoni/${testimoni.photo}`}
                  width={50}
                  height={50}
                  alt={testimoni.name}
                />
                <h3 className="font-medium">{testimoni.name}</h3>
              </div>
              {/* description */}
              <p>{testimoni.testimoni}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
