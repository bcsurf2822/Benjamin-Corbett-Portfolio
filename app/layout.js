import localFont from "next/font/local";
import "./globals.css";
import { ClearNav } from "./components/nav/ClearNav";
import { Analytics } from "@vercel/analytics/next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "BenjaminCorbettDev",
  description: "Benjamin Corbett's Portfolio",
  icons: {
    icon: '/logos/bricks.svg',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${geistSans.variable} ${geistMono.variable}

        antialiased`}
      >
        <ClearNav />
        <div className="snap-y snap-mandatory overflow-y-scroll h-screen scroll-smooth">
          {children}
        </div>

        <Analytics />
      </body>
    </html>
  );
}
