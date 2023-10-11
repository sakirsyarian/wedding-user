import { cn } from "@/lib/utils";
import Form from "./form";

// css
const defaultFlex = ["flex", "items-center", "justify-center", "gap-5"];

export default function Register() {
  return (
    <>
      <div className={cn(defaultFlex, "p-5", "min-h-screen")}>
        <Form />
      </div>
    </>
  );
}
