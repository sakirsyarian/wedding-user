import { redirect } from "next/navigation";

import { cn } from "@/lib/utils";
import { getToken } from "@/helpers/token";
import FormMusic from "./form";

// css
const defaultCard = ["p-10", "rounded-lg", "shadow-md", "bg-white"];

// validasi ulang
export const revalidate = 0;

async function getData() {
  const token = getToken();
  const res = await fetch("http://localhost:3002/v1/customer/musics", {
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

async function selectedData() {
  const token = getToken();
  const res = await fetch("http://localhost:3002/v1/customer/music/selected", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
  });

  // jika token habis atau unauthorized
  if (res.status === 401) {
    redirect("/login");
  }

  // jika data tidak ditemukan
  if (res.status === 404) {
    return null;
  }

  // jika error tampilkan pesan
  if (!res.ok) {
    console.log(res.status, "<<< status");
    console.log(res.statusText, "<<< statusText");
  }

  return res.json();
}

export default async function Music() {
  const musics = await getData();
  const selectedMusic = await selectedData();

  // mendapatkan id theme untuk validasi
  const zodEnum = [];
  musics.data.map((item) => {
    zodEnum.push(item._id);
  });

  return (
    <>
      <section id="theme">
        <div className="px-5 py-10 md:container">
          <div className={cn(defaultCard)}>
            <FormMusic
              musics={musics.data}
              zodEnum={zodEnum}
              selected={selectedMusic.data}
            />
          </div>
        </div>
      </section>
    </>
  );
}
