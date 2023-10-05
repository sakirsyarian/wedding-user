"use client";

import * as z from "zod";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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

const formSchema = z.object({
  mainHeading: z.string().min(4, {
    message: "Heading must be at least 4 characters.",
  }),
  mainDate: z.date({
    required_error: "Date event is required.",
  }),
  mainTimeZone: z.string({
    required_error: "Please select a time zone to display.",
  }),
});

export default function Sandbox() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mainHeading: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <>
      <section id="sandbox">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* title */}
            <FormField
              control={form.control}
              name="mainHeading"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Judul Acara</FormLabel>
                  <FormControl>
                    <Input placeholder="Contoh : Akad Nikah" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* date */}
            <FormField
              control={form.control}
              name="mainDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Tanggal Acara</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PP")
                          ) : (
                            <span>Pilih tanggal</span>
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
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* time zone */}
            <FormField
              control={form.control}
              name="mainTimeZone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> Zona Waktu</FormLabel>
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
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </section>
    </>
  );
}
