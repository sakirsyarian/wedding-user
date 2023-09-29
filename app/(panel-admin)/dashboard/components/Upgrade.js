import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// css
const defaultCard = ["text-slate-500", "shadow-md", "border-0"];

export default function Upgrade() {
  return (
    <>
      <Card
        className={cn(
          defaultCard,
          "shadow-none",
          "bg-red-500/10",
          "text-red-500"
        )}
      >
        <CardHeader className="pb-4">
          <CardTitle className="font-bold text-lg">
            Masa Aktif Undangan
          </CardTitle>
          <CardDescription className="text-xs text-red-500">
            Waktu Tersisa :
            <span className="font-semibold"> 2 minggu yang lalu</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-4">
          <p className="text-sm">
            Hai mempelai, masa aktif undangan pernikahan gratis kamu sebentar
            lagi mau habis nih. Upgrade paket undangan kamu yuk agar masa
            aktifnya menjadi selamanya serta mengaktifkan fitur premium lainnya.
            Mulai dari 79 Ribu aja 😉
          </p>
        </CardContent>
        <CardFooter>
          <Button size="sm" variant="destructive">
            Upgrade Sekarang
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
