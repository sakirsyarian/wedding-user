import { AlertCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import Navbar from "./components/Navbar";
import Step from "./components/Step";

// css
const defaultSpaceY = ["space-y-8"];
const defaultFlex = ["flex", "items-center"];

export default function LayoutCreation({ children }) {
  return (
    <>
      <section className="text-slate-500">
        <Navbar />
        <div className="px-5 py-10 md:container">
          <div className={cn(defaultSpaceY, "text-slate-500")}>
            <div className={cn(defaultSpaceY, "space-y-8")}>
              {/* brand */}
              <div
                className={cn(defaultFlex, "justify-between", "text-slate-600")}
              ></div>

              {/* step */}
              <Step />

              <Alert className="space-y-2 text-sky-500 border-sky-500">
                <AlertTitle className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Info
                </AlertTitle>
                <AlertDescription>
                  Data pada form ini bisa Anda ubah nanti
                </AlertDescription>
              </Alert>
            </div>
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
