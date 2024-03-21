"use client";

import Image from "next/image";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";

import { Button } from "./ui/button";
import UserDropDown from "./user-dropdown";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="flex justify-between w-full my-6 items-center z-10 text-slate-50 ">
      <div className="flex md:space-x-6 space-x-4 items-center">
        <Link href="/">
          <div className="flex items-center space-x-4">
            <Image
              src="/icon.png"
              alt="Logo"
              width={40}
              height={40}
              loading="lazy"
              className="md:w-10 md:h-10 w-8 h-8"
            />
            <p className="font-semibold md:text-xl text-md ">Movie Booking</p>
          </div>
        </Link>
      </div>

      {session?.user ? (
        <UserDropDown session={session} />
      ) : (
        <Button
          size="lg"
          onClick={() => signIn()}
          className="text-base text-slate-50"
        >
          Sign in
        </Button>
      )}
    </nav>
  );
};

export default Navbar;
