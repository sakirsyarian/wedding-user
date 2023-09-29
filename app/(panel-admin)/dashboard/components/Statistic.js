import { Users, UserCheck, UserX } from "lucide-react";

import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
const defaultCard = ["text-slate-500", "shadow-md", "border-0"];
const defaultGrid = ["grid", "grid-cols-3", "gap-5"];
const defaultFlex = ["flex", "items-center", "justify-between", "gap-5"];

export default function Statistic() {
  return (
    <>
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
    </>
  );
}
