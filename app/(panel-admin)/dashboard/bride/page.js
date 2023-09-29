import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// data
const brides = [
  {
    heading: "Mempelai Pria",
    forms: [
      {
        title: "Foto Pria",
        name: "malePicture",
        type: "file",
        placeholder: "Contoh : Foto Pria",
      },
      {
        title: "Nama Lengkap",
        name: "maleFullName",
        type: "text",
        placeholder: "Contoh : Satrio Rakabumi",
      },
      {
        title: "Nama Panggilan",
        name: "maleNickName",
        type: "text",
        placeholder: "Contoh : Satrio",
      },
      {
        title: "Nama Ayah",
        name: "maleFatherName",
        type: "text",
        placeholder: "Contoh : Agung",
      },
      {
        title: "Nama Ibu",
        name: "maleMotherName",
        type: "text",
        placeholder: "Contoh : Astrid",
      },
      {
        title: "Instagram",
        name: "maleInstagram",
        type: "text",
        placeholder: "Contoh : satriork12",
      },
      {
        title: "Facebook",
        name: "maleFacebook",
        type: "text",
        placeholder: "Contoh : satriork12",
      },
      {
        title: "Threads",
        name: "maleThreads",
        type: "text",
        placeholder: "Contoh : satriork12",
      },
    ],
  },
  {
    heading: "Mempelai Wanita",
    forms: [
      {
        title: "Foto Wanita",
        name: "femalePicture",
        type: "file",
        placeholder: "Contoh : Foto Wanita",
      },
      {
        title: "Nama Lengkap",
        name: "femaleFullName",
        type: "text",
        placeholder: "Contoh : Putri Ratna",
      },
      {
        title: "Nama Panggilan",
        name: "femaleNickName",
        type: "text",
        placeholder: "Contoh : Putri",
      },
      {
        title: "Nama Ayah",
        name: "femaleFatherName",
        type: "text",
        placeholder: "Contoh : Fajar",
      },
      {
        title: "Nama Ibu",
        name: "femaleMotherName",
        type: "text",
        placeholder: "Contoh : Minah",
      },
      {
        title: "Instagram",
        name: "femaleInstagram",
        type: "text",
        placeholder: "Contoh : putrina",
      },
      {
        title: "Facebook",
        name: "femaleFacebook",
        type: "text",
        placeholder: "Contoh : putrina",
      },
      {
        title: "Threads",
        name: "femaleThreads",
        type: "text",
        placeholder: "Contoh : putrina",
      },
    ],
  },
];

// css
const defaultSpaceY = ["space-y-10"];
const defaultCard = ["text-slate-500", "shadow-md", "border-0"];
const defaultGrid = ["grid", "items-center", "gap-10"];

export default function Bride() {
  return (
    <>
      <section id="bride">
        <div className="px-5 py-10 md:container">
          <div className={cn(defaultSpaceY)}>
            <div className="grid grid-cols-2 gap-5">
              {brides.map((bride, indexBride) => (
                <Card key={indexBride} className={cn(defaultCard)}>
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-xl">{bride.heading}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {bride.forms.map((item, index) => (
                      <div key={index} className={cn(defaultGrid, "gap-3")}>
                        <Label htmlFor={item.name}>{item.title}</Label>
                        <Input
                          type={item.type}
                          id={item.name}
                          name={item.name}
                          placeholder={item.placeholder}
                        />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button variant="primary" className="w-full">
              Simpan
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
