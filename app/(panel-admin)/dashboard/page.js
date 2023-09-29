import { cn } from "@/lib/utils";
import Statistic from "./components/Statistic";
import Upgrade from "./components/Upgrade";
import Share from "./components/Share";

// css
const defaultSpaceY = ["space-y-10"];

export default function Dashboard() {
  return (
    <>
      <section id="dashboard">
        <div className="px-5 py-10 md:container">
          <div className={cn(defaultSpaceY)}>
            <Upgrade />
            <Statistic />
            <Share />
          </div>
        </div>
      </section>
    </>
  );
}
