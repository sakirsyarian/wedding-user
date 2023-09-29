import Image from "next/image";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// data
const themes = [
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
const defaultSpaceY = ["space-y-10"];
const defaultCard = ["text-slate-500", "shadow-md", "border-0"];
const defaultCardImage = ["text-slate-500", "shadow-none", "border-0"];
const defaultGrid = ["grid", "items-center", "gap-10"];

export default function Theme() {
  return (
    <>
      <section id="theme">
        <div className="px-5 py-10 md:container">
          <div className={cn(defaultSpaceY)}>
            <Card className={cn(defaultCard)}>
              <CardHeader className="space-y-1">
                <CardTitle className="text-xl">Tema</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <RadioGroup
                  defaultValue="option-0"
                  className="flex items-center gap-5"
                >
                  {themes.map((theme, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem
                        value={`option-${index}`}
                        id={`option-${index}`}
                        name={`option-${index}`}
                        className="radio-input"
                      />
                      <Label
                        htmlFor={`option-${index}`}
                        className="radio-image"
                      >
                        <Card className={cn(defaultCardImage)}>
                          <CardHeader>
                            <Image
                              src={`/img/template/${theme.source}`}
                              width={500}
                              height={500}
                              alt={theme.title}
                            />
                          </CardHeader>
                          <CardContent>
                            <p className="font-semibold text-lg">
                              {theme.title}
                            </p>
                          </CardContent>
                        </Card>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>

            <Button variant="primary" className="w-full">
              Simpan
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
