import { cn } from "@/lib/utils";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";

// css
const defaultCaontainer = ["py-5", "container", "space-y-10", "text-slate-500"];

export default function Home() {
  return (
    <>
      <div className={cn(defaultCaontainer)}>
        <Navbar />
        <Hero />
      </div>
    </>
  );
}
