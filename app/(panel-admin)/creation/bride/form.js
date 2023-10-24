"use client";

// react and next
import { useState } from "react";
import { useRouter } from "next/navigation";

// third party
import toast, { Toaster } from "react-hot-toast";

// forms
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// data form
import brides from "./data";

// custom components
import SubmitButton from "./button";

// ui components
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// css
const defaultGrid = ["w-full", "grid", "items-center", "gap-10"];

export default function FormBride() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // zod schema
  const FormSchema = z.object({
    maleFullName: z.string().min(2, {
      message: "Nama lengkap harus diisi",
    }),
    maleNickName: z.string().min(2, {
      message: "Nama panggilan harus diisi",
    }),
    maleFatherName: z.string().min(2, {
      message: "Nama ayah harus diisi",
    }),
    maleMotherName: z.string().min(2, {
      message: "Nama ibu harus diisi",
    }),
    femaleFullName: z.string().min(2, {
      message: "Nama lengkap harus diisi",
    }),
    femaleNickName: z.string().min(2, {
      message: "Nama panggilan harus diisi",
    }),
    femaleFatherName: z.string().min(2, {
      message: "Nama ayah harus diisi",
    }),
    femaleMotherName: z.string().min(2, {
      message: "Nama ibu harus diisi",
    }),
  });
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      maleFullName: "",
      maleNickName: "",
      maleFatherName: "",
      maleMotherName: "",
      femaleFullName: "",
      femaleNickName: "",
      femaleFatherName: "",
      femaleMotherName: "",
    },
  });

  async function onSubmit(values) {
    try {
      setLoading(true);
      const res = await fetch("/api/weddings/bride", {
        method: "POST",
        body: JSON.stringify(values),
      });
      const bride = await res.json();

      //  lempar ke catch jika token habis
      if (res.status === 401) {
        throw { name: "Unauthorized", message: "Silakan login ulang" };
      }

      // menyimpan id ke storage
      localStorage.setItem("brideId", bride.data?._id);
      toast.success("Berhasil disimpan", {
        duration: 1000,
      });
      await new Promise((resolve) => setTimeout(resolve, 2000));

      router.push("/creation/event");
    } catch (error) {
      //  error jika token habis
      if (error.name === "Unauthorized") {
        toast.error(error.message, {
          duration: 2000,
        });
        await new Promise((resolve) => setTimeout(resolve, 3000));
        return router.push("/login");
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));
      return toast.error("Internal server error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Toaster position="top-right" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
          <div className={cn(defaultGrid, "md:grid-cols-2")}>
            {/* bride */}
            {brides.map((bride, indexBride) => (
              <div key={indexBride} className={cn(defaultGrid)}>
                <h2 className="font-semibold text-lg">{bride.heading}</h2>

                <div className="space-y-5">
                  {bride.forms.map((item, index) => (
                    <div key={index}>
                      <FormField
                        control={form.control}
                        name={item.name}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {item.title}
                              {item.important && (
                                <span className="ml-1 text-xs text-red-500">
                                  *
                                </span>
                              )}
                            </FormLabel>
                            <FormControl>
                              <Input
                                type={item.type}
                                placeholder={item.placeholder}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
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
      </Form>
    </>
  );
}
