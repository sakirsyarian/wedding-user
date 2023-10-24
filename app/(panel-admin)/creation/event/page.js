import Form from "./form";
import { cn } from "@/lib/utils";

// css
const defaultCard = ["p-10", "rounded-lg", "shadow-md", "bg-white"];

export default function Event() {
  return (
    <>
      <section id="event">
        <div className={cn(defaultCard)}>
          <Form />
        </div>
      </section>
    </>
  );
}
