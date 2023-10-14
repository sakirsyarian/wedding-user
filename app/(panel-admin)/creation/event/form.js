"use client";

// react and next
import { useState } from "react";
import { useRouter } from "next/navigation";

// third party
import toast, { Toaster } from "react-hot-toast";
import { format } from "date-fns";

// icon
import { Calendar as CalendarIcon } from "lucide-react";

// forms
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// data form
import events from "./data";

// custom components
import SubmitButton from "./button";

// ui components
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// css
const defaultGrid = ["w-full", "grid", "items-center", "gap-10"];

export default function FormEvent() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // regex untuk validasi waktu
  const regexPattern = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

  // zod schema
  const formSchema = z.object({
    mainHeading: z.string().min(1, {
      message: "Judul harus diisi",
    }),
    mainDate: z.date({
      required_error: "Tanggal acara harus diisi",
    }),
    mainTimeZone: z.string({
      required_error: "Zona waktu harus diisi",
    }),
    mainTimeStart: z.string().regex(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/, {
      message: "Format waktu tidak valid",
    }),
    mainTimeFinish: z
      .string()
      .nullable()
      .refine((value) => value === "" || regexPattern.test(value), {
        message: "Format waktu tidak valid",
      }),
    mainUntilDone: z.boolean().default(false),
    mainLocation: z.string().min(1, {
      message: "Lokasi harus diisi",
    }),
    mainAddress: z.string().min(1, {
      message: "Alamat harus diisi",
    }),
    optionalHeading: z.string(),
    optionalDate: z.date().optional(),
    optionalTimeZone: z.string().optional(),
    optionalTimeStart: z
      .string()
      .nullable()
      .refine((value) => value === "" || regexPattern.test(value), {
        message: "Format waktu tidak valid",
      }),
    optionalTimeFinish: z
      .string()
      .nullable()
      .refine((value) => value === "" || regexPattern.test(value), {
        message: "Format waktu tidak valid",
      }),
    optionalUntilDone: z.boolean().default(false),
    optionalLocation: z.string(),
    optionalAddress: z.string(),
  });
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mainHeading: "",
      mainTimeStart: "",
      mainTimeFinish: "",
      mainUntilDone: false,
      mainLocation: "",
      mainAddress: "",
      optionalHeading: "",
      optionalTimeStart: "",
      optionalTimeFinish: "",
      optionalUntilDone: true,
      optionalLocation: "",
      optionalAddress: "",
    },
  });

  async function onSubmit(values) {
    try {
      setLoading(true);
      const res = await fetch("/api/weddings/event", {
        method: "POST",
        body: JSON.stringify(values),
      });
      const event = await res.json();

      //  lempar ke catch jika token habis
      if (res.status === 401) {
        throw { name: "Unauthorized", message: "Silakan login ulang" };
      }

      // menyimpan id ke storage
      localStorage.setItem("eventId", event.data?._id);

      toast.success("Berhasil disimpan", {
        duration: 1000,
      });
      await new Promise((resolve) => setTimeout(resolve, 2000));

      router.push("/creation/theme");
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
          {events.map((event, index) => (
            <div key={index} className={cn(defaultGrid)}>
              <div className="flex items-center gap-2">
                <h2 className="font-semibold text-lg">{event.title}</h2>
                {event.important && (
                  <p className="text-xs text-red-500">wajib diisi</p>
                )}
              </div>

              <div className="space-y-5">
                {/* title */}
                <FormField
                  control={form.control}
                  name={event.heading}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Judul Acara
                        {event.important && (
                          <span className="ml-1 text-xs text-red-500">*</span>
                        )}
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Contoh : Akad Nikah" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* date */}
                <div
                  className={cn(
                    defaultGrid,
                    "gap-5",
                    "items-start",
                    "grid-cols-1",
                    "md:grid-cols-2"
                  )}
                >
                  {/* date */}
                  <FormField
                    control={form.control}
                    name={event.date}
                    render={({ field }) => (
                      <FormItem className="mt-1.5 flex flex-col gap-1">
                        <FormLabel>
                          Tanggal Acara
                          {event.important && (
                            <span className="ml-1 text-xs text-red-500">*</span>
                          )}
                        </FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "justify-start text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PP")
                                ) : (
                                  <span>Pilih Tanggal</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) => date < new Date()}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* time zone */}
                  <FormField
                    control={form.control}
                    name={event.timeZone}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Zona Waktu
                          {event.important && (
                            <span className="ml-1 text-xs text-red-500">*</span>
                          )}
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Pilih Zona" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="WIB">WIB</SelectItem>
                            <SelectItem value="WIT">WIT</SelectItem>
                            <SelectItem value="WITA">WITA</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* time */}
                <div
                  className={cn(
                    defaultGrid,
                    "gap-5",
                    "items-start",
                    "grid-cols-1",
                    "md:grid-cols-2"
                  )}
                >
                  {/* start time */}
                  <FormField
                    control={form.control}
                    name={event.start}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Waktu Mulai
                          {event.important && (
                            <span className="ml-1 text-xs text-red-500">*</span>
                          )}
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Contoh : 23:59" {...field} />
                        </FormControl>
                        <FormDescription className="text-sm">
                          Format jam antara 00 - 23, dan menit antara 00 - 59.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* finish time */}
                  <FormField
                    control={form.control}
                    name={event.finish.name}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Waktu Selesai</FormLabel>
                        <FormControl>
                          <Input
                            disabled={form.getValues(event.finish.disable)}
                            placeholder="Contoh : 23:59"
                            {...field}
                          />
                        </FormControl>
                        {/* until done */}
                        <FormField
                          control={form.control}
                          name={event.finish.disable}
                          render={({ field }) => (
                            <FormItem className="flex items-center gap-2 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Sampai Selesai
                              </FormLabel>
                            </FormItem>
                          )}
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* location */}
                <FormField
                  control={form.control}
                  name={event.location}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Lokasi Acara
                        {event.important && (
                          <span className="ml-1 text-xs text-red-500">*</span>
                        )}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Contoh : Hotel Golden Tulip"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* address */}
                <FormField
                  control={form.control}
                  name={event.address}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Alamat Acara
                        {event.important && (
                          <span className="ml-1 text-xs text-red-500">*</span>
                        )}
                      </FormLabel>
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
          ))}

          {/* action */}
          <div>
            <SubmitButton loading={loading} />
          </div>
        </form>
      </Form>
    </>
  );
}
