import { redirect } from "next/navigation";
import { getToken } from "@/helpers/token";
import Form from "./form";
import { cn } from "@/lib/utils";

// css
const defaultCard = ["p-10", "rounded-lg", "shadow-md", "bg-white"];

// validasi ulang
export const revalidate = 0;

async function getData() {
  const token = getToken();
  const res = await fetch("http://localhost:3002/v1/customer/events", {
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

export default async function Event() {
  const event = await getData();

  return (
    <>
      <section id="event">
        <div className="px-5 py-10 md:container">
          <div className={cn(defaultCard)}>
            <Form event={event.data} />
          </div>
        </div>
      </section>
    </>
  );
}
