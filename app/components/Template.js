import { cn } from "@/lib/utils";
import Image from "next/image";

// css
const defaultSpaceY = ["space-y-12"];

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

export default function Template() {
  return (
    <>
      <section id="template" className="border">
        <div className="container py-10">
          <div className={cn(defaultSpaceY)}>
            {/* heading */}
            <div className={cn(defaultSpaceY, "space-y-5", "text-center")}>
              <h2 className="font-semibold text-2xl">Pilihan Desain</h2>
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
