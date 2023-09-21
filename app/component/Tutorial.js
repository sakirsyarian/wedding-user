import { cn } from "@/lib/utils";

// css
const defaultSpaceY = ["space-y-12"];

// data
const tutorial = [
  {
    title: "Registrasi",
    description:
      "Buat akun baru dengan cara mengisikan email dan password atau daftar menggunakan akun Google.",
  },
  {
    title: "Isi Informasi",
    description:
      "Isi informasi mengenai mempelai, lokasi dan waktu acara, pilih desain undangan dan upload foto ke galeri",
  },
  {
    title: "Bagikan & Pantau",
    description:
      "Setelah undangan selesai dibuat, Kamu dapat langsung menyebarkan ke keluarga atau kerabat lalu pantau kehadiran serta ucapan dari tamu",
  },
];

export default function Tutorial() {
  return (
    <>
      <div className={cn(defaultSpaceY, "border")}>
        {/* heading */}
        <div className={cn(defaultSpaceY, "space-y-5", "text-center")}>
          <h2 className="font-semibold text-2xl">Langkah Pembuatan Undangan</h2>
          <p>
            Hanya butuh beberapa langkah dan menit saja hingga undangan <br />
            kamu siap digunakan
          </p>
        </div>

        {/* content */}
        <div className="grid grid-cols-3 gap-5">
          {tutorial.map((item, index) => (
            <div key={index} className={cn(defaultSpaceY, "space-y-3")}>
              {/* title */}
              <h3 className="font-medium">{item.title}</h3>
              {/* description */}
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
