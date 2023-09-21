import { cn } from "@/lib/utils";
import Image from "next/image";

// css
const defaultSpaceY = ["space-y-12"];

// template
const template = [
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
      <div className={cn(defaultSpaceY, "border")}>
        {/* heading */}
        <div className={cn(defaultSpaceY, "space-y-5", "text-center")}>
          <h2 className="font-semibold text-2xl">Pilihan Desain</h2>
          <p>
            Pilih dan gunakan tema undangan pernikahan yang menarik serta unik
          </p>
        </div>

        {/* content */}
        <div className="grid grid-cols-3 gap-5">
          {template.map((item, index) => (
            <div key={index} className={cn(defaultSpaceY, "space-y-3")}>
              {/* image */}
              <Image
                src={`/img/template/${item.source}`}
                width={500}
                height={500}
                alt={item.title}
              />
              {/* title */}
              <h3 className="font-semibold text-lg">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
