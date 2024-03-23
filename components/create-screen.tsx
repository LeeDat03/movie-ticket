"use client";

import { generateSeat } from "@/utils/helper";
import { useSearchParams } from "next/navigation";
import React from "react";

const CreateScreen = () => {
  const searchParams = useSearchParams();
  const movieId = searchParams.get("movieId");

  const handleClick = async () => {
    const res = await fetch("/api/screen/new", {
      method: "POST",
      body: JSON.stringify({
        movie: movieId,
        name: "Screen 2",
        timeStarts: [
          new Date("2024-04-01T09:30:00"),
          new Date("2024-04-01T12:30:00"),
          new Date("2024-04-01T15:30:00"),
        ],
        seats: generateSeat(6, 15, 50_000),
      }),
    });

    if (!res.ok) {
      console.log("Failed to create screen");
    }
  };

  return (
    <button className="mx-auto bg-red-500" onClick={handleClick}>
      Click here
    </button>
  );
};

export default CreateScreen;
