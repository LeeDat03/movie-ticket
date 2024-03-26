"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

import { ScreenProps } from "@/utils/types";
import { formatTime, getUniqueDate } from "@/utils/helper";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

interface ScreenSelectProps {
  screens: ScreenProps[];
}

const ScreenSelect: React.FC<ScreenSelectProps> = ({ screens }) => {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [showTime, setShowTime] = useState(0);

  const { data: session } = useSession();

  const router = useRouter();
  const screenRef = useRef(screens[selectedScreen]);

  useEffect(() => {
    screenRef.current = screens[selectedScreen];
  }, [selectedScreen, screens]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO:
    if (!session) return router.push("/api/auth/signin");

    router.push(`/seat?screenId=${screenRef.current._id}&time=${showTime}`);
  };

  return (
    <form className="flex flex-col gap-14" onSubmit={handleSubmit}>
      <div className="flex items-center gap-4">
        <label htmlFor="screen" className="text-2xl font-semibold">
          Select Screen:
        </label>
        <select
          id="screen"
          value={selectedScreen}
          onChange={(e) => setSelectedScreen(+e.target.value)}
          className="flex-1 max-w-[300px] p-2 bg-slate-950 cursor-pointer border border-gray-800"
        >
          <option value="">Select screen</option>
          {screens.map((screen, index) => {
            return (
              <option value={index} key={index}>
                {screen.name}
              </option>
            );
          })}
        </select>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-semibold">Time</h3>
        <div className="flex gap-4 flex-wrap">
          <div
            className={cn(
              "text-center bg-primary px-2 py-2 max-w-32 rounded-xl cursor-pointer"
            )}
          >
            {getUniqueDate(screenRef.current.timeStarts)}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-semibold">Date</h3>
        <div className="flex gap-4 flex-wrap">
          {screenRef.current.timeStarts.map((d, index) => {
            return (
              <div
                key={index}
                className={cn(
                  "text-center bg-transparent border border-white px-2 py-2 max-w-24 rounded-xl cursor-pointer",
                  index === showTime && "bg-primary border-primary"
                )}
                defaultValue={index}
                onClick={() => {
                  setShowTime(index);
                }}
              >
                {formatTime(new Date(d))}
              </div>
            );
          })}
        </div>
      </div>

      <Button className="self-start" size="lg" type="submit">
        Book ticket
      </Button>
    </form>
  );
};

export default ScreenSelect;
