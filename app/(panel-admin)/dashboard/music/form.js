"use client";

// react and next
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// third party
const { Howl } = require("howler");
import toast, { Toaster } from "react-hot-toast";

// icon
import { PlayCircle } from "lucide-react";
import { StopCircle } from "lucide-react";

// forms
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// custom components
import SubmitButton from "./button";

// ui components
import { cn } from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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

export default function FormMusic(props) {
  const musicProp = props.selected.music;

  const router = useRouter();

  const [sound, setSound] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let soundSource = {};
    props.musics.map((music) => {
      soundSource[music._id] = new Howl({
        src: [`/music/${music.source}`],
      });
    });

    setSound(soundSource);

    return () => {
      // Menghentikan audio saat komponen di-unmount
      if (sound) {
        sound.stop();
        setSound(null);
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [musicProp]);

  // music
  function playSound(value) {
    if (sound) {
      const play = document.getElementById(`play-${value}`);
      const stop = document.getElementById(`stop-${value}`);
      const allPlay = document.querySelectorAll(".all-play");
      const allStop = document.querySelectorAll(".all-stop");

      // mengahpus dan menambah button ketika button yang sama atau saat ini diklik
      play.classList.add("hidden");
      stop.classList.remove("hidden");

      // ini logic yang digunakan saat music saat ini masih berjalan namun musik selanjutnya juga ingin dimainkan
      // ubah objek menjadi array kemudian looping
      Object.keys(sound).map((el) => {
        //jika id yang diklik sama dengan id yang ada di objek maka dimainkan, jika tidak maka stop
        if (el === value) {
          sound[el].play();
        } else {
          sound[el].stop();

          // kalo ini untuk handle icon
          // jadi list dulu semua icon stop kemudian jika id yang diklik tidak sama dengan id yang ada di objek atau list maka hilangkan
          allStop.forEach((el) => {
            if (el.id !== `stop-${value}`) {
              el.classList.add("hidden");
            }
          });

          // list semua icon play kemudian jika id yang diklik tidak sama dengan id yang ada di objek atau list maka tampilkan
          allPlay.forEach((el) => {
            if (el.id !== `play-${value}`) {
              el.classList.remove("hidden");
            }
          });
        }
      });
    }
  }
  function stopSound(value) {
    if (sound) {
      const play = document.getElementById(`play-${value}`);
      const stop = document.getElementById(`stop-${value}`);

      play.classList.remove("hidden");
      stop.classList.add("hidden");

      sound[value].stop();
    }
  }

  // zod schema
  const formSchema = z.object({
    music: z.enum(props.zodEnum, {
      required_error: "Musik harus dipilih",
    }),
  });
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      music: musicProp,
    },
  });

  async function onSubmit(values) {
    try {
      setLoading(true);
      const res = await fetch("/api/weddings/music", {
        method: "PATCH",
        body: JSON.stringify(values),
      });
      const music = await res.json();

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
          <div className={cn(defaultGrid)}>
            <h2 className="font-semibold text-lg">Music</h2>

            <div className="space-y-5">
              <div className={cn(defaultGrid)}>
                <FormField
                  control={form.control}
                  name="music"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          {/* list music */}
                          {props.musics.map((music, index) => (
                            <div
                              key={index}
                              className="w-full flex items-center justify-between border"
                            >
                              {/* title */}
                              <div className="flex items-center justify-between">
                                {/* radio */}
                                <FormItem className="p-3 flex items-center">
                                  <FormControl>
                                    <RadioGroupItem value={music._id} />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer"></FormLabel>
                                </FormItem>

                                {/* music */}
                                <p className="font-normal">
                                  {music.title} - {music.singer}
                                </p>
                              </div>

                              {/* button */}
                              <div className="flex items-center">
                                <div
                                  id={`play-${music._id}`}
                                  className="all-play p-2.5 cursor-pointer border-l"
                                  onClick={() => playSound(music._id)}
                                >
                                  <PlayCircle className="mr-1 h-5 w-5" />
                                </div>

                                <div
                                  id={`stop-${music._id}`}
                                  className="all-stop p-2.5 hidden cursor-pointer border-l"
                                  onClick={() => stopSound(music._id)}
                                >
                                  <StopCircle className="mr-1 h-5 w-5" />
                                </div>
                              </div>
                            </div>
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
