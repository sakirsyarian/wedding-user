"use client";

import * as z from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import brides from "./data";
import SubmitButton from "./button";
// import { fetchBride, errorBride } from "./action";

// const formSchema = z.object({
//   mainHeading: z.string().min(1, {
//     message: "Judul harus diisi",
//   }),
//   mainDate: z.date({
//     required_error: "Tanggal acara harus diisi",
//   }),
//   mainTimeZone: z.string({
//     required_error: "Zona waktu harus diisi",
//   }),
//   mainTimeStart: z.string().regex(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/, {
//     message: "Format waktu tidak valid",
//   }),
//   mainTimeFinish: z
//     .string()
//     .nullable()
//     .refine((value) => value === "" || regexPattern.test(value), {
//       message: "Format waktu tidak valid",
//     }),
//   mainUntilDone: z.boolean().default(false),
//   mainLocation: z.string().min(1, {
//     message: "Lokasi harus diisi",
//   }),
//   mainAddress: z.string().min(1, {
//     message: "Alamat harus diisi",
//   }),
//   optionalHeading: z.string(),
//   optionalDate: z.date().optional(),
//   optionalTimeZone: z.string().optional(),
//   optionalTimeStart: z
//     .string()
//     .nullable()
//     .refine((value) => value === "" || regexPattern.test(value), {
//       message: "Format waktu tidak valid",
//     }),
//   optionalTimeFinish: z
//     .string()
//     .nullable()
//     .refine((value) => value === "" || regexPattern.test(value), {
//       message: "Format waktu tidak valid",
//     }),
//   optionalUntilDone: z.boolean().default(false),
//   optionalLocation: z.string(),
//   optionalAddress: z.string(),
// });

// css
const defaultGrid = ["w-full", "grid", "items-center", "gap-10"];

export default function FormBride() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    try {
      setLoading(true);
      // await fetchBride(event);

      toast.success("Berhasil disimpan");
      await new Promise((resolve) => setTimeout(resolve, 3000));

      router.push("/creation/event");
    } catch (error) {
      // await errorBride(error);
      router.push("/login");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Toaster position="top-right" />
      <form onSubmit={handleSubmit} className="space-y-10">
        <div className={cn(defaultGrid, "md:grid-cols-2")}>
          {/* male */}
          {brides.map((bride, indexBride) => (
            <div key={indexBride} className={cn(defaultGrid)}>
              <h2 className="font-semibold text-lg">{bride.heading}</h2>

              <div className="space-y-5">
                {bride.forms.map((item, index) => (
                  <div key={index} className={cn(defaultGrid, "gap-3")}>
                    <Label htmlFor={item.name}>
                      {item.title}
                      {item.important && (
                        <span className="ml-1 text-xs text-red-500">*</span>
                      )}
                    </Label>
                    <Input
                      type={item.type}
                      id={item.name}
                      name={item.name}
                      placeholder={item.placeholder}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* action */}
        <div>
          <SubmitButton loading={loading} />
        </div>
      </form>
    </>
  );
}
