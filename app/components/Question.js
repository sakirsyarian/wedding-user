import { cn } from "@/lib/utils";

// css
const defaultSpaceY = ["space-y-12"];

// data
const faq = [
  {
    question: "Apa itu Wedding?",
    answer:
      "Wedding adalah platform atau website undangan pernikahan digital yang dapat membantu Anda dalam kebutuhan undangan pernikahan Anda..",
  },
  {
    question: "Berapa lama proses pembuatan undangan digital di Wedding?",
    answer:
      "Ketika Anda selesai mendaftarkan akun dan memasukkan data yang dibutuhkan, maka undangan online akan langsung terbit. Biasanya proses keseluruhan membutuhkan waktu berkisar 10 menit dan undangan siap untuk disebarkan.",
  },
  {
    question: "Berapa lama masa aktif undangan di Wedding?",
    answer:
      "Setiap paket memiliki masa aktif berbeda-beda. Mulai dari paket basic yang memiliki masa aktif 2 hari, paket premium dengan masa aktif 1 tahun, dan paket platinum dengan masa aktif 1 tahun.",
  },
];

export default function Question() {
  return (
    <>
      <section id="faq" className="border">
        <div className="container py-10">
          <div className={cn(defaultSpaceY)}>
            {/* heading */}
            <div className={cn(defaultSpaceY, "space-y-5", "text-center")}>
              <h2 className="font-semibold text-2xl">Pertanyaan Umum</h2>
              <p>Dibawah ini adalah daftar pertanyaan yang sering ditanyakan</p>
            </div>

            {/* content */}
            <div className="grid grid-cols-1 gap-5">
              {faq.map((item, index) => (
                <div key={index} className={cn(defaultSpaceY, "space-y-3")}>
                  {/* title */}
                  <h3 className="font-medium">{item.question}</h3>
                  {/* description */}
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
