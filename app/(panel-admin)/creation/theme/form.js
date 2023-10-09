"use client";

import * as z from "zod";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import SubmitButton from "./button";

// css
const defaultGrid = ["w-full", "grid", "items-center", "gap-10"];
const defaultCardImage = ["text-slate-500", "shadow-none"];

export default function FormTheme() {
  const router = useRouter();

  const [theme, setTheme] = useState([]);
  const [validationOption, setValidationOption] = useState([]);
  const [loadingTheme, setLoadingTheme] = useState(false);

  const [loading, setLoading] = useState(false);

  // fetching theme setelah component di-mount
  useEffect(() => {
    async function fetchTheme() {
      try {
        setLoadingTheme(true);
        const res = await fetch("/api/weddings/theme");
        const themes = await res.json();

        // handle error
        if (res.status === 401) {
          throw { name: "Unauthorized", message: themes.message };
        }
        if (themes.name === "Error") {
          throw { message: themes.message };
        }

        // digunakan untuk opsi validasi zod enum
        const noDuplicate = [];
        themes.data.map((item) => {
          noDuplicate.push(item._id);

          setValidationOption(noDuplicate);
        });

        setTheme(themes.data);
      } catch (error) {
        // jika token habis akan redirect ke login
        if (error.name === "Unauthorized") {
          return router.push("/login");
        }

        console.log(error, "<<< error form");
        return router.push("/login");
      } finally {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setLoadingTheme(false);
      }
    }

    fetchTheme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // validasi pilihan yang sesuai
  const formSchema = z.object({
    theme: z.enum(validationOption, {
      required_error: "Tema harus dipilih",
    }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values) {
    try {
      setLoading(true);

      // local storage
      const bride = localStorage.getItem("brideId");
      const event = localStorage.getItem("eventId");

      const weddingData = {
        theme: values.theme,
        bride,
        event,
      };

      const res = await fetch("/api/weddings", {
        method: "POST",
        body: JSON.stringify(weddingData),
      });

      // handle error
      const wedding = await res.json();
      if (res.status === 401) {
        throw { name: "Unauthorized", message: wedding.message };
      }
      if (wedding.name === "Error") {
        throw { message: wedding.message };
      }

      // menghapus storage
      localStorage.clear();

      toast.success("Berhasil disimpan");
      await new Promise((resolve) => setTimeout(resolve, 3000));
      console.log(wedding, "<<< wedding");

      router.push("/dashboard");
    } catch (error) {
      // jika token habis akan redirect ke login
      if (error.name === "Unauthorized") {
        toast.error(error.message, {
          duration: 2000,
        });
        await new Promise((resolve) => setTimeout(resolve, 4000));
        return router.push("/login");
      }

      await new Promise((resolve) => setTimeout(resolve, 2000));
      return toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Toaster position="top-right" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
          <div className={cn(defaultGrid)}>
            <h2 className="font-semibold text-lg">Tema</h2>

            <div className="space-y-5">
              <div className={cn(defaultGrid)}>
                <FormField
                  control={form.control}
                  name="theme"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex items-center space-x-2"
                        >
                          {loadingTheme && (
                            <div className="w-full flex gap-2 justify-center">
                              <Loader2 className="animate-spin" />
                              <span>Loading...</span>
                            </div>
                          )}

                          {!loadingTheme &&
                            theme.map((item, index) => (
                              <FormItem
                                key={index}
                                className="flex items-center space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <RadioGroupItem
                                    className="radio-input"
                                    value={item._id}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal radio-image">
                                  <Card className={cn(defaultCardImage)}>
                                    <CardHeader>
                                      <Image
                                        src={`/img/template/${item.cover}`}
                                        width={500}
                                        height={500}
                                        alt={item.name}
                                      />
                                    </CardHeader>
                                    <CardContent>
                                      <p className="font-semibold text-lg">
                                        {item.name}
                                      </p>
                                    </CardContent>
                                  </Card>
                                </FormLabel>
                              </FormItem>
                            ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
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
