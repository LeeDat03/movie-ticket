"use client";

import TicketList from "@/components/ticket-list";
import { SessionUserDefault, TicketProps } from "@/utils/types";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const MyTicket = () => {
  const [tickets, setTickets] = useState<TicketProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>();
  const { data: session } = useSession();

  useEffect(() => {
    let isMounted = true;

    const fetchTickets = async () => {
      setIsLoading(true);
      const res = await fetch(
        `/api/ticket/user/${(session as SessionUserDefault)?.user.id}`
      );
      const data = await res.json();
      if (isMounted) {
        setIsLoading(false);
        setTickets(data);
      }
    };

    if (session?.user && tickets.length === 0) {
      fetchTickets();
      console.log("FETCH");
    }

    return () => {
      isMounted = false;
    };
  }, [session, tickets]);

  return <TicketList tickets={tickets} />;
};

export default MyTicket;
