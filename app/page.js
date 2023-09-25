import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Choose from "./components/Choose";
import Feature from "./components/Feature";
import Tutorial from "./components/Tutorial";
import Template from "./components/Template";
import Testimoni from "./components/Testimoni";
import Price from "./components/Price";
import Question from "./components/Question";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="text-slate-500">
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
