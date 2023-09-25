import { cn } from "@/lib/utils";

// css
const defaultSpaceY = ["space-y-16"];

export default function Dashboard() {
  return (
    <>
      <section id="dashboard">
        <div className="px-5 py-10 md:container">
          <div className={cn(defaultSpaceY)}>
            <h1>Dashboard</h1>
          </div>
        </div>
      </section>
    </>
  );
}
