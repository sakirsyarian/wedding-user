import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
      <section id="template">
        <div className="container py-24">
          <div className={cn(defaultSpaceY)}>
            {/* heading */}
            <div className={cn(defaultSpaceY, "space-y-5", "text-center")}>
              <p className={cn(defaultMiniHead)}>Pilihan Tema</p>
              <h2 className={cn(defaultHead)}>Memilih Tema Pernikahan</h2>
              <p>
                Pilih dan gunakan tema undangan pernikahan yang menarik serta
                unik
              </p>
            </div>

            {/* content */}
            <div className="grid grid-cols-3 gap-5">
              {templates.map((template, index) => (
                <Card key={index} className="text-slate-500 border-0">
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
                <Button className="text-base" variant="primary">
                  Tema Lainnya
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
