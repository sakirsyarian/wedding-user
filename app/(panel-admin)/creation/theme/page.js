import { redirect } from "next/navigation";
import { getToken } from "@/helpers/token";
import { cn } from "@/lib/utils";
import FormTheme from "./form";

// css
const defaultCard = ["p-10", "rounded-lg", "shadow-md", "bg-white"];

// validasi ulang setiap jam
export const revalidate = 3600;

async function getData() {
  const token = getToken();
  const res = await fetch("http://localhost:3002/v1/customer/themes", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
  });

  if (!res.ok) redirect("/login");
  return res.json();
}

export default async function Theme() {
  const themes = await getData();

  // mendapatkan id theme untuk validasi
  const zodEnum = [];
  themes.data.map((item) => {
    zodEnum.push(item._id);
  });

  return (
    <>
      <section id="theme">
        <div className={cn(defaultCard)}>
          <FormTheme themes={themes.data} zodEnum={zodEnum} />
        </div>
      </section>
    </>
  );
}
