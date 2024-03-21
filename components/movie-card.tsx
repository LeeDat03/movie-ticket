import { MovieProps } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface MovieCardProps {
  movie: MovieProps;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const { title, poster, _id: movieId } = movie;

  return (
    <Link href={`/screen?movieId=${movieId}`}>
      <div className="flex flex-col gap-2 items-center">
        <Image
          src={poster}
          alt={`${title} Image`}
          loading="lazy"
          width={200}
          height={300}
          className="md:w-[250px] md:h-[400px] w-[150px] h-[200px]"
        />
        <h3 className="text-lg font-bold w-full md:max-w-[200px] text-center">
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default MovieCard;
