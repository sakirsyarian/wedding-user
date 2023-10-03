"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import SubmitButton from "./button";
import { fetchBride, errorBride } from "./action";

// data
const male = [
  {
    title: "Nama Lengkap",
    name: "maleFullName",
    placeholder: "Contoh : Satrio Rakabumi",
  },
  {
    title: "Nama Panggilan",
    name: "maleNickName",
    placeholder: "Contoh : Satrio",
  },
  {
    title: "Nama Ayah",
    name: "maleFatherName",
    placeholder: "Contoh : Agung",
  },
  {
    title: "Nama Ibu",
    name: "maleMotherName",
    placeholder: "Contoh : Astrid",
  },
];

const female = [
  {
    title: "Nama Lengkap",
    name: "femaleFullName",
    placeholder: "Contoh : Putri Ratna",
  },
  {
    title: "Nama Panggilan",
    name: "femaleNickName",
    placeholder: "Contoh : Putri",
  },
  {
    title: "Nama Ayah",
    name: "femaleFatherName",
    placeholder: "Contoh : Fajar",
  },
  {
    title: "Nama Ibu",
    name: "femaleMotherName",
    placeholder: "Contoh : Minah",
  },
];

// css
const defaultGrid = ["w-full", "grid", "items-center", "gap-10"];

export default function Form() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    try {
      setLoading(true);
      await fetchBride(event);

      toast.success("Berhasil disimpan");
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // router.push("/creation/event");
    } catch (error) {
      await errorBride(error);
      router.push("/login");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Toaster position="top-right" />
      <form
        onSubmit={handleSubmit}
        className="space-y-10"
        encType="multipart/form-data"
      >
        <div className={cn(defaultGrid, "md:grid-cols-2")}>
          {/* male */}
          <div className={cn(defaultGrid)}>
            <h2 className="font-semibold text-lg">Mempelai Pria</h2>

            <div className="space-y-5">
              {/* upload */}
              <div className={cn(defaultGrid, "gap-3")}>
                <Label htmlFor="maleImage">Foto Pria</Label>
                <Input id="maleImage" name="maleImage" type="file" />
              </div>

              {/* form male */}
              {male.map((item, index) => (
                <div key={index} className={cn(defaultGrid, "gap-3")}>
                  <Label htmlFor={item.name}>{item.title}</Label>
                  <Input
                    type="text"
                    id={item.name}
                    name={item.name}
                    placeholder={item.placeholder}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* female */}
          <div className={cn(defaultGrid)}>
            <h2 className="font-semibold text-lg">Mempelai Wanita</h2>

            <div className="space-y-5">
              {/* upload */}
              <div className={cn(defaultGrid, "gap-3")}>
                <Label htmlFor="femaleImage">Foto Wanita</Label>
                <Input id="femaleImage" name="femaleImage" type="file" />
              </div>

              {/* form male */}
              {female.map((item, index) => (
                <div key={index} className={cn(defaultGrid, "gap-3")}>
                  <Label htmlFor={item.name}>{item.title}</Label>
                  <Input
                    type="text"
                    id={item.name}
                    name={item.name}
                    placeholder={item.placeholder}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* action */}
        <div>
          <SubmitButton loading={loading} />
        </div>
      </form>
    </>
  );
}
