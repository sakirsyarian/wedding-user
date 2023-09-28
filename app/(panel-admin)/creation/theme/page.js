import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

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
const defaultCard = ["p-10", "rounded-lg", "shadow-md", "bg-white"];
const defaultCardImage = ["text-slate-500", "shadow-md", "border-0"];
const defaultFlex = ["flex", "items-center", "justify-between", "gap-10"];
const defaultGrid = ["w-full", "grid", "items-center", "gap-10"];

export default function Theme() {
  return (
    <>
      <section id="theme">
        <div className={cn(defaultCard)}>
          <div className="space-y-10">
            <div className={cn(defaultGrid)}>
              <h2 className="font-semibold text-lg">Tema</h2>

              <div className="space-y-5">
                <div className={cn(defaultGrid)}>
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
