import { cn } from "@/lib/utils";
import Form from "./form";

// css
const defaultCard = ["p-10", "rounded-lg", "shadow-md", "bg-white"];

export default function Bride() {
  return (
    <>
      <section id="bride">
        <div className="px-5 py-10 md:container">
          <div className={cn(defaultCard)}>
            <Form />
          </div>
        </div>
      </section>
    </>
  );
}
