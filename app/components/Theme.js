import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

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
const defaultMiniHead = ["uppercase", "font-semibold", "text-primary"];
const defaultHead = [
  "font-semibold",
  "text-2xl",
  "md:text-3xl",
  "text-tertiary",
];
const defaultCard = ["text-slate-500", "shadow-md", "border-0"];
const defaultGrid = [
  "grid",
  "grid-cols-1",
  "md:grid-cols-2",
  "lg:grid-cols-3",
  "gap-5",
];

export default function Template() {
  return (
    <>
      <section id="theme">
        <div className="px-5 py-24 md:container">
          <div className={cn(defaultSpaceY)}>
            {/* heading */}
            <div className={cn(defaultSpaceY, "space-y-5", "text-center")}>
              <p className={cn(defaultMiniHead)}>Pilihan Tema</p>
              <h2 className={cn(defaultHead)}>Memilih Tema Pernikahan</h2>
              <p>
                Silakan pilih beragam tema undangan pernikahan yang telah kami
                sediakan <br className="hidden md:block" /> sesuai selera dan
                telah kami desain secara special khusus untuk Anda
              </p>
            </div>

            {/* content */}
            <div className={cn(defaultGrid)}>
              {templates.map((template, index) => (
                <Card key={index} className={cn(defaultCard)}>
                  <CardHeader>
                    <Image
                      src={`/img/template/${template.source}`}
                      width={500}
                      height={500}
                      alt={template.title}
                    />
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-lg">{template.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* more theme */}
            <div className="text-center">
              <Link href="/">
                <Button variant="primary">Tema Lainnya</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
