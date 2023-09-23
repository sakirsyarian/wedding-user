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
    question: "Apa itu Wedding?",
    answer:
      "Wedding adalah platform atau website undangan pernikahan digital yang dapat membantu Anda dalam kebutuhan undangan pernikahan Anda.",
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

// css
const defaultSpaceY = ["space-y-16"];
const defaultMiniHead = ["uppercase", "font-semibold", "text-amber-500"];
const defaultHead = ["font-semibold", "text-3xl"];
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
              <p>Dibawah ini adalah daftar pertanyaan yang sering ditanyakan</p>
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
