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
        name: "Screen 3",
        timeStarts: [
          new Date("2024-04-01T07:00:00"),
          new Date("2024-04-01T10:00:00"),
          new Date("2024-04-01T13:00:00"),
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
