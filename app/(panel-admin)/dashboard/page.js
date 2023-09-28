import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// css
const defaultSpaceY = ["space-y-10"];
const defaultCard = ["text-slate-500", "shadow-md", "border-0"];

export default function Dashboard() {
  return (
    <>
      <section id="dashboard">
        <div className="px-5 py-10 md:container">
          <div className={cn(defaultSpaceY)}>
            {/* upgrade */}
            <Card
              className={cn(
                defaultCard,
                "shadow-none",
                "bg-red-500/10",
                "text-red-500"
              )}
            >
              <CardHeader>
                <CardTitle className="font-bold text-lg">
                  Masa Aktif Undangan
                </CardTitle>
                <CardDescription className="text-xs text-red-500">
                  Waktu Tersisa :
                  <span className="font-semibold"> 2 minggu yang lalu</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Hai mempelai, masa aktif undangan pernikahan gratis Kamu
                  sebentar lagi mau habis nih. Upgrade paket undangan Kamu yuk
                  agar masa aktifnya menjadi selamanya serta mengaktifkan fitur
                  premium lainnya. Mulai dari 79 Ribu aja 😉
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="destructive">
                  Upgrade Sekarang
                </Button>
              </CardFooter>
            </Card>

            {/* info */}
          </div>
        </div>
      </section>
    </>
  );
}
