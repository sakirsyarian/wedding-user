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
import dataInputRegister from "./data";

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
    username: z.string().min(2, {
      message: "Username harus diisi",
    }),
    phoneNumber: z.string().min(2, {
      message: "Nomor whatsapp harus diisi",
    }),
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
      username: "",
      phoneNumber: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values) {
    try {
      setLoading(true);
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(values),
      });
      const user = await res.json();

      //  lempar ke catch jika field tidak terisi
      if (res.status === 400) {
        throw { name: "Bad Request", message: user.message };
      }

      toast.success("Registrasi berhasil", {
        duration: 1000,
      });
      await new Promise((resolve) => setTimeout(resolve, 2000));

      router.push("/login");
    } catch (error) {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      //  error jika field tidak terisi
      if (error.name === "Bad Request") {
        return error.message.map((message) => toast.error(message));
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
                  Buat akun dulu 🚀
                </CardTitle>
                <CardDescription>
                  Ayo buat akun Andaring supaya bisa bikin undangan gratis
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

              {dataInputRegister.map((item, index) => (
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
                Sudah memiliki akun?{" "}
                <Link href="/login" className="text-secondary">
                  Masuk sini
                </Link>
              </div>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </>
  );
}
