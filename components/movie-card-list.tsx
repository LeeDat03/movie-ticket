"use client";

import { MovieProps } from "@/utils/types";
import { useEffect, useState } from "react";
import MovieCard from "./movie-card";

const MovieCardList = () => {
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
        console.log(data);
      } catch {
        console.log("Failed to fetch movies");
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="mt-10 mx-20 flex justify-center flex-wrap gap-10">
      {movies.map((movie) => {
        return <MovieCard movie={movie} key={movie._id} />;
      })}
    </div>
  );
};

export default MovieCardList;
