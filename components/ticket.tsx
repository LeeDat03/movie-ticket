import React from "react";
import { Button } from "./ui/button";
import { TicketProps } from "@/utils/types";
import { formatTime } from "@/utils/helper";

const Ticket = ({ ticket }: { ticket: TicketProps }) => {
  return (
    <div className="w-[300px] flex-col flex border border-gray-100 shadow-lg rounded-xl px-6 py-4 gap-6">
      <div className="flex flex-col">
        <h4 className="text-gray-300 text-base">Date</h4>
        <p className="text-2xl">
          {new Date(ticket.screen.timeStarts[0]).toDateString()}
        </p>
      </div>
      <div className="flex flex-col">
        <h4 className="text-gray-300 text-base">Movie Title</h4>
        <p className="text-2xl uppercase">{ticket.movie.title}</p>
      </div>
      <div className="flex gap-10 justify-between">
        <div className="max-w-[200px]">
          <h4 className="text-gray-300 text-base">
            Seat ({ticket.seats.length})
          </h4>
          <p className="text-2xl">{ticket.seats.join(", ")}</p>
        </div>
        <div>
          <h4 className="text-gray-300 text-base">Hour</h4>
          <p className="text-2xl">
            {formatTime(new Date(ticket.screen.timeStarts[0]))}
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        <h4 className="text-gray-300 text-base">Created at</h4>
        <p className="text-2xl">
          {new Date(ticket.bookingDate).toDateString()}
        </p>
      </div>

      <Button>Download ticket</Button>
    </div>
  );
};

export default Ticket;
