import { Metadata } from "next";
import "./globals.css";
import Provider from "@/components/provider";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Movie Booking Ticket",
  description: "Book your movie tickets online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>

        <div className="app">
          <Provider>
            <Navbar />
            <main className="w-full">{children}</main>
          </Provider>
        </div>
      </body>
    </html>
  );
}
