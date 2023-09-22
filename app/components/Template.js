import { cn } from "@/lib/utils";
import Image from "next/image";

// template
const templates = [
  {
    title: "Pastel Floral",
    source: "pastel.png",
  },
  {
    title: "Sparkling Flower",
    source: "sparkling.png",
  },
  {
    title: "Sweet Flower",
    source: "sweet.png",
  },
];

// css
const defaultSpaceY = ["space-y-16"];
const defaultMiniHead = ["uppercase", "font-semibold", "text-amber-500"];
const defaultHead = ["font-semibold", "text-3xl"];

export default function Template() {
  return (
    <>
      <section id="template" className="border">
        <div className="container py-10">
          <div className={cn(defaultSpaceY)}>
            {/* heading */}
            <div className={cn(defaultSpaceY, "space-y-5", "text-center")}>
              <p className={cn(defaultMiniHead)}>Pilihan Tema</p>
              <h2 className={cn(defaultHead)}>Langkah Pembuatan Undangan</h2>
              <p>
                Pilih dan gunakan tema undangan pernikahan yang menarik serta
                unik
              </p>
            </div>

            {/* content */}
            <div className="grid grid-cols-3 gap-5">
              {templates.map((template, index) => (
                <div key={index} className={cn(defaultSpaceY, "space-y-3")}>
                  {/* image */}
                  <Image
                    src={`/img/template/${template.source}`}
                    width={500}
                    height={500}
                    alt={template.title}
                  />
                  {/* title */}
                  <h3 className="font-semibold text-lg">{template.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
