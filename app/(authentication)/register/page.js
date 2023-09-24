"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Toaster } from "react-hot-toast";

import { fetchLogin, errorLogin } from "./action";
import SubmitButton from "./button";

import { cn } from "@/lib/utils";

import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

// css
const defaultSpaceY = ["pace-y-5"];
const defaultCard = ["text-slate-500", "shadow-md", "border-0"];
const defaultFlex = ["flex", "items-center", "justify-center", "gap-5"];
const defaultTitle = [
  "font-semibold",
  "text-center",
  "text-3xl",
  "text-slate-500",
];

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    try {
      setLoading(true);
      await fetchLogin(event);
      router.push("/");
    } catch (error) {
      await errorLogin(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Toaster position="top-right" />
      <div className={cn(defaultFlex, "p-5", "min-h-screen")}>
        <form onSubmit={handleSubmit} className={cn(defaultSpaceY)}>
          <Card className={cn(defaultCard)}>
            <CardHeader className="space-y-5">
              <Link href="/" className={cn(defaultTitle)}>
                Wedding
              </Link>
              <div className={cn(defaultSpaceY, "space-y-1")}>
                <CardTitle className="text-2xl text-slate-500/80">
                  Petualangan dimulai di sini 🚀
                </CardTitle>
                <CardDescription>
                  Jadikan manajemen aplikasi Anda mudah dan menyenangkan!
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid grid-cols-2 gap-6">
                <Button variant="outline" disabled>
                  <Icons.gitHub className="mr-2 h-5 w-5" />
                  Github
                </Button>
                <Button variant="outline" disabled>
                  <Icons.google className="mr-2 h-5 w-5" />
                  Google
                </Button>
              </div>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" required />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-5">
              <SubmitButton loading={loading} />
              <div className="text-sm">
                Baru di platform kami?{" "}
                <Link href="/register" className="text-amber-500">
                  Buat akun
                </Link>
              </div>
            </CardFooter>
          </Card>
        </form>
      </div>
    </>
  );
}
