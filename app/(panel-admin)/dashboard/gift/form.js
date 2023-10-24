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
import gifts from "./data";

// custom components
import SubmitButton from "./button";

// ui components
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

export default function FormStory(props) {
  const bank = props.gift?.bank || "";
  const digital = props.gift?.digital || "";
  const address = props.gift?.address || "";

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // zod schema
  const formSchema = z.object({
    bankName: z.string({
      required_error: "Nama bank harus diisi",
    }),
    bankUser: z.string().min(1, {
      message: "Nama lengkap harus diisi",
    }),
    bankNumber: z.string().min(1, {
      message: "Nomor rekening harus diisi",
    }),
    digitalName: z.string({
      required_error: "Nama platform harus diisi",
    }),
    digitalUser: z.string().min(1, {
      message: "Nama lengkap harus diisi",
    }),
    digitalNumber: z.string().min(1, {
      message: "Nomor telepon harus diisi",
    }),
    addressName: z.string().min(1, {
      message: "Nama penerima harus diisi",
    }),
    addressNumber: z.string().min(1, {
      message: "Nomor penerima harus diisi",
    }),
    addressHome: z.string().min(1, {
      message: "Alamat penerima harus diisi",
    }),
  });
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bankName: bank.bankName || undefined,
      bankUser: bank.bankUser || "",
      bankNumber: bank.bankNumber || "",
      digitalName: digital.digitalName || undefined,
      digitalUser: digital.digitalUser || "",
      digitalNumber: digital.digitalNumber || "",
      addressName: address.addressName || "",
      addressNumber: address.addressNumber || "",
      addressHome: address.addressHome || "",
    },
  });

  async function onSubmit(values) {
    try {
      setLoading(true);

      let method;
      if (props.gift) {
        method = "PUT";
      } else {
        method = "POST";
      }

      const res = await fetch("/api/weddings/gift", {
        method: method,
        body: JSON.stringify(values),
      });
      const gift = await res.json();

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
          <div className={cn(defaultGrid, "grid-cols-2")}>
            {gifts.map((gift, index) => (
              <div key={index} className={cn(defaultGrid)}>
                <div className="flex items-center gap-2">
                  <h2 className="font-semibold text-lg">{gift.title}</h2>
                </div>

                <div className="space-y-5">
                  {/* platform */}
                  <FormField
                    control={form.control}
                    name={gift.platformName.name}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{gift.platformName.title}</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue
                                placeholder={gift.platformName.placeholder}
                              />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {gift.platformName.select.map((item) => (
                              <div key={item}>
                                <SelectItem value={item}>{item}</SelectItem>
                              </div>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* user name */}
                  <FormField
                    control={form.control}
                    name={gift.platformUser.name}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{gift.platformUser.title}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={gift.platformUser.placeholder}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* account number */}
                  <FormField
                    control={form.control}
                    name={gift.platformNumber.name}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{gift.platformNumber.title}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={gift.platformNumber.placeholder}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* address */}
          <div className={cn(defaultGrid)}>
            <div className="flex items-center gap-2">
              <h2 className="font-semibold text-lg">Alamat Kado</h2>
            </div>

            <div className="space-y-5">
              {/* place */}
              <FormField
                control={form.control}
                name="addressName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama Penerima</FormLabel>
                    <FormControl>
                      <Input placeholder="Contoh : Putri Ratna" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* number */}
              <FormField
                control={form.control}
                name="addressNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nomor Penerima</FormLabel>
                    <FormControl>
                      <Input placeholder="Contoh : 0851645254" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* location */}
              <FormField
                control={form.control}
                name="addressHome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Alamat Penerima</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Contoh : Jl. Jend. Sudirman Kav. 9 Cikokol Sukasari, Tangerang, Banten"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
