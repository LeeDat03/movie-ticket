"use client";

import React, { useState } from "react";

import { ScreenProps } from "@/utils/types";
import { cn } from "@/lib/utils";

import { calcPrice } from "@/utils/helper";
import PreviewSeat from "./preview-seat";

interface SeatPickProps {
  screen: ScreenProps;
}

const SeatPick = ({ screen }: SeatPickProps) => {
  const [selectedSeat, setSelectedSeat] = useState<string[]>([]);

  const toggleSelectedSeat = (row: string, index: number) => {
    const isSelected = selectedSeat.includes(`${row}${index}`);

    if (!isSelected) {
      setSelectedSeat([...selectedSeat, `${row}${index}`]);
    } else {
      setSelectedSeat((prev) =>
        prev.filter((seat) => seat !== `${row}${index}`)
      );
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="w-[600px] mb-7 bg-white text-black h-10 rounded-xl text-2xl font-semibold flex items-center justify-center">
          Screen
        </div>
        {screen.seats.map((seat) => {
          return (
            <div key={seat.row} className="flex gap-5">
              {seat.columns.map((column, index) => {
                return (
                  <button
                    key={index}
                    className={cn(
                      "flex items-center justify-center bg-white text-black font-semibold w-[40px] h-[40px] cursor-pointer",
                      column === 1 && "bg-gray-500 cursor-not-allowed",
                      selectedSeat.includes(`${seat.row}${index + 1}`) &&
                        "bg-primary text-white"
                    )}
                    disabled={column === 1}
                    onClick={() => toggleSelectedSeat(seat.row, index + 1)}
                  >
                    {seat.row}
                    {""}
                    {index + 1}
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>

      {selectedSeat.length > 0 && (
        <div className="mx-auto w-4/5 mt-20 border-t-2 border-gray-300">
          {/* TODO: custom price */}
          <PreviewSeat
            selectedSeat={selectedSeat}
            totalPrice={calcPrice(selectedSeat.length, screen.seats[0].price)}
            setSelectedSeat={setSelectedSeat}
          />
        </div>
      )}
    </>
  );
};

export default SeatPick;
