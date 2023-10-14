"use client";

// react and next
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

// third party
import toast, { Toaster } from "react-hot-toast";

// forms
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// data form
import dataInputLogin from "./data";

// custom components
import SubmitButton from "./button";

// ui components
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// css
const defaultSpaceY = ["pace-y-5"];
const defaultCard = ["text-slate-500", "shadow-md", "border-0"];
const defaultTitle = ["mx-auto", "font-semibold", "text-3xl", "text-slate-500"];

export default function FormLogin() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // zod schema
  const FormSchema = z.object({
    email: z
      .string()
      .min(2, {
        message: "Email harus diisi",
      })
      .email({
        message: "Email tidak valid",
      }),
    password: z.string().min(2, {
      message: "Password harus diisi",
    }),
  });
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values) {
    try {
      setLoading(true);
      const res = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(values),
      });
      const user = await res.json();

      //  lempar ke catch jika salah email atau password
      if (res.status === 401) {
        throw { name: "Unauthorized", message: "Invalid email or password" };
      }

      //  lempar ke catch jika admin masuk
      if (res.status === 403) {
        throw { name: "Forbidden", message: "Admin dilarang masuk" };
      }

      // mencari wedding
      const resWedding = await fetch(`/api/weddings/${user.id}`);
      const wedding = await resWedding.json();

      toast.success("Login berhasil", {
        duration: 1000,
      });
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // jika wedding tidak ditemukan maka alihkan ke creation
      if (wedding.name === "NotFound") {
        return router.push("/creation/bride");
      }

      // jika wedding ditemukan maka alihkan ke dashboard
      router.push("/dashboard");
    } catch (error) {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      //  error jika salah email atau password
      if (error.name === "Unauthorized") {
        return toast.error(error.message);
      }

      //  error jika admin masuk
      if (error.name === "Forbidden") {
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
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn(defaultSpaceY)}
        >
          <Card className={cn(defaultCard)}>
            <CardHeader className="space-y-8">
              <Link href="/" className={cn(defaultTitle)}>
                <Image
                  src="/img/logo/andaring.png"
                  width={200}
                  height={200}
                  alt="andaring"
                  priority={true}
                />
              </Link>
              <div className={cn(defaultSpaceY, "space-y-1")}>
                <CardTitle className="text-xl text-tertiary">
                  Ayo masuk sini 👋🏻
                </CardTitle>
                <CardDescription>
                  Masuk akun Andaring dulu ya untuk buat undangan gratis
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="hidden grid-cols-2 gap-6">
                {/* hidden */}
                <Button variant="outline" disabled>
                  <Icons.gitHub className="mr-2 h-5 w-5" />
                  Github
                </Button>
                <Button variant="outline" disabled>
                  <Icons.google className="mr-2 h-5 w-5" />
                  Google
                </Button>
              </div>
              {/* hidden */}
              <div className="hidden relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>

              {dataInputLogin.map((item, index) => (
                <div key={index}>
                  <FormField
                    control={form.control}
                    name={item.name}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{item.label}</FormLabel>
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
            </CardContent>
            <CardFooter className="flex flex-col gap-5">
              <SubmitButton loading={loading} />
              <div className="text-sm">
                Belum punya akun?{" "}
                <Link href="/register" className="text-secondary">
                  Buat akun
                </Link>
              </div>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </>
  );
}
