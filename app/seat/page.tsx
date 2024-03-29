"use client";

import LoadingWave from "@/components/loading/loading-wave";
import SeatPick from "@/components/seat-pick";
import { ScreenProps } from "@/utils/types";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Seat = () => {
  const [screen, setScreen] = useState<ScreenProps>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const searchParams = useSearchParams();
  const screenId = searchParams.get("screenId");

  useEffect(() => {
    const fetchScreenById = async () => {
      try {
        const res = await fetch(`/api/screen/${screenId}`);
        if (!res.ok) {
          throw new Error("Failed to fetch screen");
        }
        const data = await res.json();
        setScreen(data[0]);
        setIsLoading(false);
      } catch (err) {
        console.log("Failed to get screen", err);
      }
    };

    fetchScreenById();
  }, [screenId]);

  if (isLoading) return <LoadingWave />;

  if (!screen) return <div>Screen not be found</div>;

  return (
    <div className="mt-5 mb-32">
      <h2 className="text-4xl font-semibold mb-3">Seat</h2>
      <SeatPick screen={screen} />
    </div>
  );
};

export default Seat;
