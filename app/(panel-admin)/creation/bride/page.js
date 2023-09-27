import Link from "next/link";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

// data
const male = [
  {
    title: "Nama Lengkap",
    name: "maleFullName",
    placeholder: "Contoh : Satrio Rakabumi",
  },
  {
    title: "Nama Panggilan",
    name: "maleNickName",
    placeholder: "Contoh : Satrio",
  },
  {
    title: "Nama Ayah",
    name: "maleFatherName",
    placeholder: "Contoh : Agung",
  },
  {
    title: "Nama Ibu",
    name: "maleMotherName",
    placeholder: "Contoh : Astrid",
  },
];

const female = [
  {
    title: "Nama Lengkap",
    name: "femaleFullName",
    placeholder: "Contoh : Putri Ratna",
  },
  {
    title: "Nama Panggilan",
    name: "femaleNickName",
    placeholder: "Contoh : Putri",
  },
  {
    title: "Nama Ayah",
    name: "femaleFatherName",
    placeholder: "Contoh : Fajar",
  },
  {
    title: "Nama Ibu",
    name: "femaleMotherName",
    placeholder: "Contoh : Minah",
  },
];

// css
const defaultCard = ["p-10", "rounded-lg", "shadow-md", "bg-white"];
const defaultFlex = ["flex", "items-center", "justify-between", "gap-10"];
const defaultGrid = ["w-full", "grid", "items-center", "gap-10"];

export default function Bride() {
  return (
    <>
      <section id="bride">
        <div className={cn(defaultCard)}>
          <div className="space-y-10">
            <div className={cn(defaultFlex)}>
              {/* male */}
              <div className={cn(defaultGrid)}>
                <h2 className="font-semibold text-lg">Mempelai Pria</h2>

                <div className="space-y-5">
                  {/* upload */}
                  <div className={cn(defaultGrid, "gap-3")}>
                    <Label htmlFor="picture">Foto Pria</Label>
                    <Input id="malePicture" name="malePicture" type="file" />
                  </div>

                  {/* form male */}
                  {male.map((item, index) => (
                    <div key={index} className={cn(defaultGrid, "gap-3")}>
                      <Label htmlFor={item.name}>{item.title}</Label>
                      <Input
                        type="text"
                        id={item.name}
                        name={item.name}
                        placeholder={item.placeholder}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* female */}
              <div className={cn(defaultGrid)}>
                <h2 className="font-semibold text-lg">Mempelai Wanita</h2>

                <div className="space-y-5">
                  {/* upload */}
                  <div className={cn(defaultGrid, "gap-3")}>
                    <Label htmlFor="picture">Foto Wanita</Label>
                    <Input
                      id="femalePicture"
                      name="femalePicture"
                      type="file"
                    />
                  </div>

                  {/* form male */}
                  {female.map((item, index) => (
                    <div key={index} className={cn(defaultGrid, "gap-3")}>
                      <Label htmlFor={item.name}>{item.title}</Label>
                      <Input
                        type="text"
                        id={item.name}
                        name={item.name}
                        placeholder={item.placeholder}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* action */}
            <div>
              <Link href="/creation/bride">
                <Button variant="primary" className="w-full">
                  Simpan
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
