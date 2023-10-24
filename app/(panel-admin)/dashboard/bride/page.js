import { redirect } from "next/navigation";
import { getToken } from "@/helpers/token";
import { cn } from "@/lib/utils";
import FormBride from "./form";

// css
const defaultCard = ["p-10", "rounded-lg", "shadow-md", "bg-white"];

// validasi ulang
export const revalidate = 0;

async function getData() {
  const token = getToken();
  const res = await fetch("http://localhost:3002/v1/customer/brides", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
  });

  // jika token habis atau unauthorized
  if (res.status === 401) {
    redirect("/login");
  }

  // jika error tampilkan pesan
  if (!res.ok) {
    console.log(res.status, "<<< status");
    console.log(res.statusText, "<<< statusText");
  }

  return res.json();
}

export default async function Bride() {
  const bride = await getData();

  return (
    <>
      <section id="bride">
        <div className="px-5 py-10 md:container">
          <div className={cn(defaultCard)}>
            <FormBride bride={bride.data} />
          </div>
        </div>
      </section>
    </>
  );
}
