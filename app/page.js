import { cn } from "@/lib/utils";

import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import WhyMe from "./component/WhyMe";
import Feature from "./component/feature";

// css
const defaultCaontainer = ["py-5", "container", "space-y-20", "text-slate-500"];

export default function Home() {
  return (
    <>
      <div className={cn(defaultCaontainer)}>
        <Navbar />
        <Hero />
        <WhyMe />
        <Feature />
      </div>
    </>
  );
}
