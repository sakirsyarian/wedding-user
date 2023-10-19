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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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
  const beginning = props.story?.beginning || "";
  const dating = props.story?.dating || "";
  const wedding = props.story?.wedding || "";

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // zod schema
  const formSchema = z.object({
    beginningDate: z.date({
      required_error: "Tanggal perkenalan harus diisi",
    }),
    beginningStory: z.string().min(1, {
      message: "Cerita perkenalan harus diisi",
    }),
    datingDate: z.date({
      required_error: "Tanggal pacaran harus diisi",
    }),
    datingStory: z.string().min(1, {
      message: "Cerita pacaran harus diisi",
    }),
    weddingDate: z.date({
      required_error: "Tanggal lamaran harus diisi",
    }),
    weddingStory: z.string().min(1, {
      message: "Cerita lamaran harus diisi",
    }),
  });
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      beginningDate: beginning.beginningDate
        ? new Date(beginning.beginningDate)
        : undefined,
      beginningStory: beginning.beginningStory,
      datingDate: dating.datingDate ? new Date(dating.datingDate) : undefined,
      datingStory: dating.datingStory,
      weddingDate: wedding.weddingDate
        ? new Date(wedding.weddingDate)
        : undefined,
      weddingStory: wedding.weddingStory,
    },
  });

  async function onSubmit(values) {
    try {
      setLoading(true);

      let method;
      if (props.story) {
        method = "PUT";
      } else {
        method = "POST";
      }

      const res = await fetch("/api/weddings/story", {
        method: method,
        body: JSON.stringify(values),
      });
      const story = await res.json();

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
          {events.map((event, index) => (
            <div key={index} className={cn(defaultGrid)}>
              <div className="flex items-center gap-2">
                <h2 className="font-semibold text-lg">{event.title}</h2>
              </div>

              <div className="space-y-5">
                {/* foto */}
                <FormField
                  control={form.control}
                  name={event.image.name}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{event.image.title}</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          placeholder={event.image.placeholder}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* date */}
                <FormField
                  control={form.control}
                  name={event.date.name}
                  render={({ field }) => (
                    <FormItem className="mt-1.5 flex flex-col gap-1">
                      <FormLabel>{event.date.title}</FormLabel>
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
                                format(new Date(field.value), "PP")
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
                            disabled={(date) => date > new Date()}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* story */}
                <FormField
                  control={form.control}
                  name={event.story.name}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{event.story.title}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={event.story.placeholder}
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
