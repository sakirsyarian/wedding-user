import { cn } from "@/lib/utils";

// css
const defaultSpaceY = ["space-y-12"];

// data
const tutorials = [
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
      <section id="tutorial" className="border">
        <div className="container py-10">
          <div className={cn(defaultSpaceY)}>
            {/* heading */}
            <div className={cn(defaultSpaceY, "space-y-5", "text-center")}>
              <h2 className="font-semibold text-2xl">
                Langkah Pembuatan Undangan
              </h2>
              <p>
                Hanya butuh beberapa langkah dan menit saja hingga undangan{" "}
                <br />
                kamu siap digunakan
              </p>
            </div>

            {/* content */}
            <div className="grid grid-cols-3 gap-5">
              {tutorials.map((tutorial, index) => (
                <div key={index} className={cn(defaultSpaceY, "space-y-3")}>
                  {/* title */}
                  <h3 className="font-medium">{tutorial.title}</h3>
                  {/* description */}
                  <p>{tutorial.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
