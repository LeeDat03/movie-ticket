"use client";

import React from "react";
import { Button } from "./ui/button";
import { formatMoney, formatSeat } from "@/utils/helper";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

interface PreviewSeatProps {
  selectedSeat: string[];
  totalPrice: number;
  setSelectedSeat: (seat: string[]) => void;
}

const PreviewSeat = ({
  selectedSeat,
  totalPrice,
  setSelectedSeat,
}: PreviewSeatProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const screenId = searchParams.get("screenId");

  const timeIndex = searchParams.get("time");

  const handleConfirm = async () => {
    // TODO: create ticket, make seat unavailable

    const isConfirmed = confirm("Are you sure to choose this seat?");

    if (!isConfirmed) return;

    try {
      const res = await fetch(`/api/screen/${screenId}`, {
        method: "PATCH",
        body: JSON.stringify({
          seats: selectedSeat,
        }),
      });
      if (!res.ok) throw new Error("Failed to submit");

      const data = await res.json();
      router.push("/");
    } catch (err) {
      console.log("Failed to submit", err);
    }
  };

  return (
    <div className="flex justify-between items-center mt-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-base uppercase">Total</h3>
        <p className="text-3xl font-semibold">{formatMoney(totalPrice)}</p>
      </div>
      <div className="flex flex-col gap-2 flex-wrap max-w-[200px]">
        <h3 className="text-base uppercase">Seat</h3>
        <p className="text-3xl font-semibold">{formatSeat(selectedSeat)}</p>
      </div>

      <div className="flex gap-4">
        <Button
          size="lg"
          variant="outline"
          onClick={() => {
            setSelectedSeat([]);
          }}
        >
          Cancel
        </Button>
        <Button size="lg" onClick={() => handleConfirm()}>
          Proceed Payment
        </Button>
      </div>
    </div>
  );
};

export default PreviewSeat;
