"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { ScreenProps } from "@/utils/types";
import Image from "next/image";
import ScreenSelect from "@/components/screen-select";
import LoadingWave from "@/components/loading/loading-wave";

const Screen = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [screens, setScreens] = useState<ScreenProps[]>([]);
  const searchParams = useSearchParams();
  const movieId = searchParams.get("movieId");

  // Fetch screen by movieID
  useEffect(() => {
    const fetchScreenByMovieId = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`/api/screen/movie/${movieId}`);
        if (!res.ok) {
          throw new Error("Failed to fetch screen");
        }
        const data = await res.json();
        setScreens(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchScreenByMovieId();
  }, [movieId]);

  if (isLoading) {
    return <LoadingWave />;
  }

  if (!movieId || !screens.length) {
    return (
      <div className="text-xl text-center">
        Sorry this movie is not being show!
      </div>
    );
  }

  return (
    <div className="mt-10 flex gap-10">
      <div className="flex-1 flex flex-col items-center">
        <ScreenSelect screens={screens} />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center gap-4">
        <Image
          src={screens[0].movie.poster}
          alt="Poster of film"
          width={300}
          height={350}
          loading="lazy"
        />
        <div className="max-w-[300px] flex flex-col items-center justify-center gap-2 text-center">
          <h3 className="text-3xl font-bold">{screens[0].movie.title}</h3>
          <div>
            <div className="flex items-center gap-2 text-base">
              <p>Duration:</p>
              <p>{screens[0].movie.duration} minutes</p>
            </div>
            <div className="flex items-center gap-2 text-base">
              <p>Director:</p>
              <p>{screens[0].movie.director}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen;
