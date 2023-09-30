import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// data
const stories = [
  {
    title: "Perkenalan",
    forms: [
      {
        title: "Foto",
        name: "intro",
        type: "file",
      },
    ],
    name: "description",
    placeholder: "Contoh : Pada pandangan pertama kami bertemu di rumahnya",
  },
  {
    title: "Pacaran",
    forms: [
      {
        title: "Foto",
        name: "intro",
        type: "file",
      },
    ],
    name: "description",
    placeholder: "Contoh : Pada pandangan pertama kami bertemu di rumahnya",
  },
];

// css
const defaultSpaceY = ["space-y-10"];
const defaultCard = ["text-slate-500", "shadow-md", "border-0"];
const defaultCardImage = ["text-slate-500", "shadow-none", "border-0"];
const defaultGrid = ["grid", "items-center", "gap-10"];

export default function Story() {
  return (
    <>
      <section id="story">
        <div className="px-5 py-10 md:container">
          <div className={cn(defaultSpaceY)}>
            <Card className={cn(defaultCard)}>
              <CardHeader>
                <CardTitle>Story</CardTitle>
              </CardHeader>
              <CardContent className="space-y-10">
                {stories.map((story, indexStory) => (
                  <div key={indexStory} className="space-y-5">
                    <h2>{story.title}</h2>
                    {story.forms.map((form, index) => (
                      <div key={index} className={cn(defaultGrid, "gap-3")}>
                        <Label htmlFor={form.name}>{form.title}</Label>
                        <Input
                          type={form.type}
                          id={form.name}
                          name={form.name}
                        />
                      </div>
                    ))}
                    <div className={cn(defaultGrid, "gap-3")}>
                      <Label htmlFor={story.name}>Deskripsi</Label>
                      <Textarea
                        id={story.name}
                        name={story.name}
                        placeholder={story.placeholder}
                      />
                    </div>
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
