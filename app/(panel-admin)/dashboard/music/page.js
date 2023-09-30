import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// data
const musics = [
  {
    title: "Marry Your Daughter - Brian McKnight",
    source: "pastel.png",
  },
  {
    title: "Shane Filan - Beautiful In White",
    source: "sparkling.png",
  },
  {
    title: "Christina Perri - A Thousand Years",
    source: "sweet.png",
  },
];

// css
const defaultSpaceY = ["space-y-10"];
const defaultCard = ["text-slate-500", "shadow-md", "border-0"];
const defaultCardImage = ["text-slate-500", "shadow-none", "border-0"];
const defaultGrid = ["grid", "items-center", "gap-10"];

export default function Music() {
  return (
    <>
      <section id="music">
        <div className="px-5 py-10 md:container">
          <div className={cn(defaultSpaceY)}>
            <Card className={cn(defaultCard)}>
              <CardHeader>
                <CardTitle>Musik</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  defaultValue="option-0"
                  className="flex items-center gap-5"
                >
                  {musics.map((music, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem
                        id={`option-${index}`}
                        value={`option-${index}`}
                        className="radio-input"
                      />
                      <Label
                        htmlFor={`option-${index}`}
                        className="radio-image rounded-md border"
                      >
                        <Card className={cn(defaultCardImage)}>
                          <CardHeader>
                            <CardTitle className="font-normal text-base">
                              {music.title}
                            </CardTitle>
                          </CardHeader>
                          <CardFooter>
                            <Button size="sm" className="w-full">
                              Play
                            </Button>
                          </CardFooter>
                        </Card>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
              <CardFooter></CardFooter>
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
