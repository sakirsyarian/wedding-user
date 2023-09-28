import { Users, UserCheck, UserX } from "lucide-react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// data
const guests = [
  {
    title: "Jumlah Tamu",
    count: 50,
    description: "Jumlah tamu yang diundang",
    icon: <Users />,
  },
  {
    title: "Akan Hadir",
    count: 30,
    description: "Tamu akan datang dipesta",
    icon: <UserCheck />,
  },
  {
    title: "Tidak Hadir",
    count: 20,
    description: "Tamu berhalangan datang",
    icon: <UserX />,
  },
];

// css
const defaultSpaceY = ["space-y-10"];
const defaultCard = ["text-slate-500", "shadow-md", "border-0"];
const defaultGrid = ["grid", "grid-cols-3", "gap-5"];
const defaultFlex = ["flex", "items-center", "justify-between", "gap-5"];

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
                  Hai mempelai, masa aktif undangan pernikahan gratis kamu
                  sebentar lagi mau habis nih. Upgrade paket undangan kamu yuk
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
            <div className={cn(defaultGrid)}>
              {guests.map((guest, index) => (
                <Card key={index} className={cn(defaultCard)}>
                  <CardHeader
                    className={cn(defaultFlex, "flex-row", "space-y-0", "pb-2")}
                  >
                    <CardTitle className="text-sm font-medium">
                      {guest.title}
                    </CardTitle>
                    {guest.icon}
                  </CardHeader>

                  <CardContent>
                    <div className="text-2xl font-semibold">{guest.count}</div>
                    <p className="text-xs text-muted-foreground">
                      {guest.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* link */}
            <Card className={cn(defaultCard)}>
              <CardHeader>
                <CardTitle className="text-xl">Sebarkan Link</CardTitle>

                <CardDescription>
                  Silakan bagikan link ini ke tamu undangan
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex gap-5">
                  <Input
                    value="https://andaring.com/sarian-astrid?guest=Vanessa"
                    readOnly
                  />
                  <div className="flex gap-5">
                    <Button size="sm" variant="primary">
                      Copy
                    </Button>
                    <Button size="sm" variant="primary">
                      Open
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
