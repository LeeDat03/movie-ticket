import { TicketProps } from "@/utils/types";
import Ticket from "./ticket";

interface TicketListProps {
  tickets: TicketProps[];
}

const TicketList = ({ tickets }: TicketListProps) => {
  return (
    <div className="px-40 mt-5 gap-10 flex flex-col items-center justify-center">
      <h3 className="text-3xl uppercase text-center font-semibold">
        My ticket
      </h3>

      <div className="flex flex-wrap gap-6 items-stretch  justify-center">
        {tickets.map((ticket) => (
          <Ticket key={ticket._id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default TicketList;
