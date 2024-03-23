import React, { useState } from "react";
import { ScreenProps } from "@/utils/types";
import { useRouter } from "next/navigation";

interface ScreenSelectProps {
  screens: ScreenProps[];
}

const ScreenSelect: React.FC<ScreenSelectProps> = ({ screens }) => {
  const [selectedScreen, setSelectedScreen] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [showTime, setShowTime] = useState("");

  const router = useRouter();

  const handleSelectScreen = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedScreen(e.target.value);
  };

  return (
    <form>
      <div className="flex items-center gap-4">
        <label htmlFor="screen" className="text-xl">
          Select Screen:
        </label>
        <select
          id="screen"
          value={selectedScreen}
          onChange={(e) => setSelectedScreen(e.target.value)}
          className="flex-1 max-w-[300px] p-2 bg-slate-950 cursor-pointer border border-gray-800"
        >
          <option value="">Select screen</option>
          {screens.map((screen) => {
            return (
              <option value={screen.name} key={screen.name}>
                {screen.name}
              </option>
            );
          })}
        </select>
      </div>
    </form>
  );
};

export default ScreenSelect;
