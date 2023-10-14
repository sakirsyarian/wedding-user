import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// css
const defaultCard = ["text-slate-500", "shadow-md", "border-0"];

export default function Share() {
  return (
    <>
      <Card className={cn(defaultCard)}>
        <CardHeader>
          <CardTitle className="text-xl">Sebarkan Link</CardTitle>

          <CardDescription>
            Silakan bagikan link ini ke tamu undangan
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Input
              value="https://andaring.com/sarian-astrid?guest=Vanessa"
              readOnly
            />
            <div className="flex gap-5 text-base">
              <Button variant="primary">Copy</Button>
              <Button variant="primary">Edit</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
