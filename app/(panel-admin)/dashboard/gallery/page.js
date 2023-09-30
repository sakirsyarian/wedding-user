import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// data
const forms = [
  { name: "imageOne", title: "Gambar Satu" },
  { name: "imageTwo", title: "Gambar Dua" },
  { name: "imageThree", title: "Gambar Tiga" },
  { name: "imageFour", title: "Gambar Empat" },
  { name: "imageFive", title: "Gambar Lima" },
];

// css
const defaultSpaceY = ["space-y-10"];
const defaultCard = ["text-slate-500", "shadow-md", "border-0"];
const defaultCardImage = ["text-slate-500", "shadow-none", "border-0"];
const defaultGrid = ["grid", "items-center", "gap-10"];

export default function Gallery() {
  return (
    <>
      <section id="gallery">
        <div className="px-5 py-10 md:container">
          <div className={cn(defaultSpaceY)}>
            <Card className={cn(defaultCard)}>
              <CardHeader>
                <CardTitle>Gallery</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                {forms.map((form, index) => (
                  <div key={index} className={cn(defaultGrid, "gap-3")}>
                    <Label htmlFor={form.name}>{form.title}</Label>
                    <Input type={"file"} id={form.name} name={form.name} />
                  </div>
                ))}
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
