"use client";

import { useState } from "react";
import Link from "next/link";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import DatePicker from "react-datepicker";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
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

// css
const defaultSpaceY = ["space-y-10"];
const defaultCard = ["text-slate-500", "shadow-md", "border-0"];
const defaultGrid = ["grid", "items-center", "gap-10"];

export default function Event() {
  // ceremony time
  const [ceremonyTimeStart, setCeremonyTimeStart] = useState(new Date());
  const [ceremonyTimeFinish, setCeremonyTimeFinish] = useState(new Date());

  // reseption time
  const [receptionTimeStart, setReceptionTimeStart] = useState(new Date());
  const [receptionTimeFinish, setReceptionTimeFinish] = useState(new Date());

  // date
  const [ceremonyDate, setceremonyDate] = useState();
  const [reseptionDate, setReseptionDate] = useState();

  // data
  const events = [
    {
      title: "Akad Nikah",
      date: {
        dateEvent: ceremonyDate,
        setDateEvent: setceremonyDate,
      },
      timeZone: "ceremonyTimeZone",
      time: {
        timeStart: ceremonyTimeStart,
        setTimeStart: setCeremonyTimeStart,
        timeFinish: ceremonyTimeFinish,
        setTimeFinish: setCeremonyTimeFinish,
      },
      location: {
        name: "ceremonyLocation",
        placeholder: "Contoh : Hotel Golden Tulip",
      },
      address: {
        name: "ceremonyAddress",
        placeholder:
          "Contoh : Jl. Jend. Sudirman Kav. 9 Cikokol Sukasari, Tangerang, Banten",
      },
    },
    {
      title: "Resepsi",
      date: {
        dateEvent: reseptionDate,
        setDateEvent: setReseptionDate,
      },
      timeZone: "receptionTimeZone",
      time: {
        timeStart: receptionTimeStart,
        setTimeStart: setReceptionTimeStart,
        timeFinish: receptionTimeFinish,
        setTimeFinish: setReceptionTimeFinish,
      },
      location: {
        name: "receptionLocation",
        placeholder: "Contoh : Hotel Golden Tulip",
      },
      address: {
        name: "receptionAddress",
        placeholder:
          "Contoh : Jl. Jend. Sudirman Kav. 9 Cikokol Sukasari, Tangerang, Banten",
      },
    },
  ];

  return (
    <>
      <section id="event">
        <div className="px-5 py-10 md:container">
          <div className={cn(defaultSpaceY)}>
            {events.map((event, index) => (
              <Card key={index} className={cn(defaultCard)}>
                <CardHeader className="space-y-1">
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className={cn(defaultGrid, "grid-cols-4", "gap-5")}>
                    {/* date */}
                    <div className={cn(defaultGrid, "gap-0")}>
                      <Label htmlFor={event.date.dateEvent} className="mb-3">
                        Tanggal Acara
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "justify-start text-left font-normal",
                              !event.date.dateEvent && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {event.date.dateEvent ? (
                              format(event.date.dateEvent, "PPP")
                            ) : (
                              <span>Pilih tanggal</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={event.date.dateEvent}
                            onSelect={event.date.setDateEvent}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    {/* time zone */}
                    <div className={cn(defaultGrid, "gap-0")}>
                      <Label htmlFor={event.timeZone} className="mb-3">
                        Zona Waktu
                      </Label>
                      <Select id={event.timeZone} name={event.timeZone}>
                        <SelectTrigger>
                          <SelectValue placeholder="Zona" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="WIB">WIB</SelectItem>
                          <SelectItem value="WIT">WIT</SelectItem>
                          <SelectItem value="WITA">WITA</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* start time */}
                    <div className={cn(defaultGrid, "gap-0")}>
                      <Label htmlFor={event.time.timeStart} className="mb-3">
                        Waktu Mulai
                      </Label>
                      <DatePicker
                        showTimeSelect
                        selected={event.time.timeStart}
                        timeIntervals={15}
                        showTimeSelectOnly
                        dateFormat="HH:mm"
                        id="time-only-picker"
                        onChange={(date) => event.time.setTimeStart(date)}
                        customInput={<Input />}
                      />
                    </div>

                    {/* finish time */}
                    <div className={cn(defaultGrid, "gap-0")}>
                      <Label htmlFor={event.time.timeFinish} className="mb-3">
                        Waktu Selesai
                      </Label>
                      <DatePicker
                        showTimeSelect
                        selected={event.time.timeFinish}
                        timeIntervals={15}
                        showTimeSelectOnly
                        dateFormat="HH:mm"
                        id="time-only-picker"
                        onChange={(date) => event.time.setTimeFinish(date)}
                        customInput={<Input />}
                      />
                    </div>
                  </div>

                  {/* location */}
                  <div className={cn(defaultGrid, "gap-3")}>
                    <Label htmlFor={event.location.name}>Lokasi Acara</Label>
                    <Input
                      id={event.location.name}
                      name={event.location.name}
                      type="text"
                      placeholder={event.location.placeholder}
                    />
                  </div>

                  {/* address */}
                  <div className={cn(defaultGrid, "gap-3")}>
                    <Label htmlFor={event.address.name}>Alamat Acara</Label>
                    <Textarea
                      id={event.address.name}
                      name={event.address.name}
                      placeholder={event.address.placeholder}
                    />
                  </div>
                </CardContent>
                <CardFooter></CardFooter>
              </Card>
            ))}

            <Button variant="primary" className="w-full">
              Simpan
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
