import { cn } from "@/lib/utils";

import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Choose from "./component/Choose";
import Feature from "./component/Feature";
import Tutorial from "./component/Tutorial";
import Template from "./component/Template";
import Testimoni from "./component/Testimoni";
import Price from "./component/Price";
import Question from "./component/Question";
import Footer from "./component/Footer";

// css
const defaultCaontainer = ["py-5", "container", "space-y-20", "text-slate-500"];

export default function Home() {
  return (
    <>
      <div className={cn(defaultCaontainer)}>
        <Navbar />
        <Hero />
        <Choose />
        <Feature />
        <Tutorial />
        <Template />
        <Testimoni />
        <Price />
        <Question />
        <Footer />
      </div>
    </>
  );
}
