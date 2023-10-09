import FormTheme from "./form";
import { cn } from "@/lib/utils";

// css
const defaultCard = ["p-10", "rounded-lg", "shadow-md", "bg-white"];

export default function Theme() {
  return (
    <>
      <section id="theme">
        <div className={cn(defaultCard)}>
          <FormTheme />
        </div>
      </section>
    </>
  );
}
