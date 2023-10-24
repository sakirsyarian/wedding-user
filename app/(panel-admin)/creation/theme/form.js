"use client";

// react and next
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// third party
import toast, { Toaster } from "react-hot-toast";

// forms
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// custom components
import SubmitButton from "./button";

// ui components
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

// css
const defaultGrid = ["w-full", "grid", "items-center", "gap-10"];
const defaultCardImage = ["text-slate-500", "shadow-none"];

export default function FormTheme(props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // zod schema
  const formSchema = z.object({
    theme: z.enum(props.zodEnum, {
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
      if (!bride) {
        throw { name: "BadRequest", message: "Silakan mengisi form mempelai" };
      }
      const event = localStorage.getItem("eventId");
      if (!bride) {
        throw { name: "BadRequest", message: "Silakan mengisi form acara" };
      }

      const weddingData = {
        theme: values.theme,
        bride,
        event,
      };

      const res = await fetch("/api/weddings", {
        method: "POST",
        body: JSON.stringify(weddingData),
      });
      const wedding = await res.json();

      // lempar ke catch jika token habis
      if (res.status === 401) {
        throw { name: "Unauthorized", message: "Silakan login ulang" };
      }

      // menghapus local storage
      localStorage.clear();

      toast.success("Berhasil disimpan", {
        duration: 1000,
      });
      await new Promise((resolve) => setTimeout(resolve, 2000));

      router.push("/dashboard");
    } catch (error) {
      // error jika token habis
      if (error.name === "Unauthorized") {
        toast.error(error.message, {
          duration: 2000,
        });
        await new Promise((resolve) => setTimeout(resolve, 3000));
        return router.push("/login");
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));

      // error jika form tidak lengkap
      if (error.name === "BadRequest") {
        return toast.error(error.message);
      }

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
                          className="grid grid-cols-1 md:grid-cols-3 items-center gap-5"
                        >
                          {props.themes.map((item, index) => (
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
