import Navbar from "./components/Navbar";

export default function LayoutDashboard({ children }) {
  return (
    <>
      <div className="text-slate-500">
        <Navbar />
        {children}
      </div>
    </>
  );
}
