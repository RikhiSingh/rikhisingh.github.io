import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rikhi Singh | Web Developer",
  description: "Rikhi Singh Web Developer Portfolio ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* as we need metadata to be rendered and transition provider requires use client */}
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
