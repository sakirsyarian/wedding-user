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

// custom components
import brides from "./data";
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

export default function FormBride(props) {
  const brideMale = props.bride.male;
  const brideFemale = props.bride.female;

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
    maleInstagram: z.string().nullable(),
    maleFacebook: z.string().nullable(),
    maleThreads: z.string().nullable(),
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
    femaleInstagram: z.string().nullable(),
    femaleFacebook: z.string().nullable(),
    femaleThreads: z.string().nullable(),
  });
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      maleFullName: brideMale.maleFullName || "",
      maleNickName: brideMale.maleNickName || "",
      maleFatherName: brideMale.maleFatherName || "",
      maleMotherName: brideMale.maleMotherName || "",
      maleInstagram: brideMale.maleSocialMedia.maleInstagram || "",
      maleFacebook: brideMale.maleSocialMedia.maleFacebook || "",
      maleThreads: brideMale.maleSocialMedia.maleThreads || "",
      femaleFullName: brideFemale.femaleFullName || "",
      femaleNickName: brideFemale.femaleNickName || "",
      femaleFatherName: brideFemale.femaleFatherName || "",
      femaleMotherName: brideFemale.femaleMotherName || "",
      femaleInstagram: brideFemale.femaleSocialMedia.femaleInstagram || "",
      femaleFacebook: brideFemale.femaleSocialMedia.femaleFacebook || "",
      femaleThreads: brideFemale.femaleSocialMedia.femaleThreads || "",
    },
  });

  async function onSubmit(values) {
    try {
      setLoading(true);
      const res = await fetch("/api/weddings/bride", {
        method: "PUT",
        body: JSON.stringify(values),
      });
      const bride = await res.json();

      // lempar ke catch jika token habis
      if (res.status === 401) {
        throw {
          status: 401,
          name: "Unauthorized",
          message: "Silakan login ulang",
        };
      }

      toast.success("Berhasil diupdate", {
        duration: 1000,
      });
      await new Promise((resolve) => setTimeout(resolve, 2000));

      router.push("/dashboard");
      router.refresh();
    } catch (error) {
      // error jika token habis
      if (error.status === 401) {
        toast.error(error.message, {
          duration: 2000,
        });
        await new Promise((resolve) => setTimeout(resolve, 3000));
        router.push("/login");
        return router.refresh();
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
