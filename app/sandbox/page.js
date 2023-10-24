"use client";

import React, { useEffect, useState } from "react";
import { Howl } from "howler";

const AudioPlayer = ({ src }) => {
  const [sound, setSound] = useState(null);

  useEffect(() => {
    if (src) {
      setSound(new Howl({ src: [src] }));
    }

    return () => {
      if (sound) {
        sound.unload();
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  const playAudio = () => {
    if (sound) {
      sound.play();
    }
  };

  const stopAudio = () => {
    if (sound) {
      sound.stop();
    }
  };

  return (
    <div className="flex gap-5">
      <button className="p-2 border" onClick={playAudio}>
        Mainkan Audio
      </button>
      <button className="p-2 border" onClick={stopAudio}>
        Hentikan Audio
      </button>
    </div>
  );
};

function Home() {
  return (
    <div>
      <h1>Selamat datang di Proyek Next.js</h1>
      <AudioPlayer src="/music/marry-your-daughter.mp3" />
    </div>
  );
}

export default Home;
