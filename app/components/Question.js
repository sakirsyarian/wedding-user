import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// data
const faq = [
  {
    question: "Apa itu Andaring?",
    answer:
      "Andaring merupakan platform undangan pernikahan online yang dapat membantu Anda untuk membuat undangan pernikahan.",
  },
  {
    question: "Bagaimana cara ordernya?",
    answer:
      "Bisa langsung chat tim kami via WhatsApp ataupun DM Instagram. Sampaikan pilihan tema/paket yang Anda mau setelah itu tim kami akan berikan form untuk diisi dan dilanjutkan dengan pembayaran.",
  },
  {
    question: "Apakah bisa kustom tema?",
    answer:
      "Bisa, tapi dengan harga yang berbeda sesuai tingkat kesulitannya, hubungi tim kami untuk informasi lebih lanjut.",
  },
  {
    question: "Undangannya bisa disebar berapa banyak?",
    answer:
      "Anda bisa sebar undangan online ini sebanyak yang Anda inginkan (tak terbatas) karena bentuk undangan ini digital, cukup mengirimkan link undangan yang sudah kami buatkan.",
  },
  {
    question: "Berapa lama proses pembuatan undangan online di Andaring?",
    answer:
      "Ketika Anda selesai mendaftarkan akun dan memasukkan data yang dibutuhkan, maka undangan online akan langsung terbit. Biasanya proses keseluruhan membutuhkan waktu berkisar 10 menit dan undangan siap untuk disebarkan.",
  },
  {
    question:
      "Jadwal acara saya berubah, apa bisa direvisi dan dikenakan biaya tambahan?",
    answer:
      "Apabila ada perubahan tanggal, jam atau lokasi acara bisa revisi tanpa batas dan tanpa biaya tambahan ya. Asalkan tidak mengubah acara seperti mengubah resepsi menjadi ngunduh mantu atau sebaliknya.",
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
const defaultGrid = ["grid", "grid-cols-4", "gap-5"];

export default function Question() {
  return (
    <>
      <section id="faq">
        <div className="px-5 py-24 md:container">
          <div className={cn(defaultSpaceY)}>
            {/* heading */}
            <div className={cn(defaultSpaceY, "space-y-5", "text-center")}>
              <p className={cn(defaultMiniHead)}>FAQ</p>
              <h2 className={cn(defaultHead)}>Pertanyaan Umum</h2>
              <p>
                Berikut merupakan daftar pertanyaan yang sering diajukan kepada
                kami
              </p>
            </div>

            {/* content */}
            <div className={cn(defaultGrid, "grid-cols-1")}>
              <Accordion type="single" collapsible>
                {faq.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="text-left"
                  >
                    <AccordionTrigger className="text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-left">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
