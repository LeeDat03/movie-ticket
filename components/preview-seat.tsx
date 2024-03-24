import React from "react";
import { Button } from "./ui/button";
import { formatMoney } from "@/utils/helper";

interface PreviewSeatProps {
  selectedSeat: string[];
  // totalPrice: number;
  setSelectedSeat: (seat: string[]) => void;
}

const PreviewSeat = ({ selectedSeat, setSelectedSeat }: PreviewSeatProps) => {
  return (
    <div className="flex justify-between items-center mt-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-base uppercase">Total</h3>
        <p className="text-3xl font-semibold">
          {formatMoney(selectedSeat.length * 50_000)}
        </p>
      </div>
      <div className="flex flex-col gap-2 flex-wrap max-w-[200px]">
        <h3 className="text-base uppercase">Seat</h3>
        <p className="text-3xl font-semibold">
          {selectedSeat
            .sort()
            .map((seat) => seat)
            .join(", ")}
        </p>
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
        <Button size="lg">Proceed Payment</Button>
      </div>
    </div>
  );
};

export default PreviewSeat;
