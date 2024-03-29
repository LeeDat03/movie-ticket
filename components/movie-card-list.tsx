"use client";

import { useEffect, useState } from "react";

import { MovieProps } from "@/utils/types";
import MovieCard from "./movie-card";
import LoadingWave from "./loading/loading-wave";

const MovieCardList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch("/api/movie");

        if (!res.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await res.json();
        setMovies(data);
        setIsLoading(false);
      } catch {
        console.log("Failed to fetch movies");
      }
    };

    fetchMovies();
  }, []);

  if (isLoading) {
    return <LoadingWave />;
  }

  return (
    <div className="mt-10 mx-20 flex justify-center flex-wrap gap-10">
      {movies.map((movie) => {
        return <MovieCard movie={movie} key={movie._id} />;
      })}
    </div>
  );
};

export default MovieCardList;
