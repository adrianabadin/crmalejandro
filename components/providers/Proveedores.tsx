"use client";
import { TanstackProvider } from "../../components/providers/TanstackProvider";
import { MaterialProvider } from "../../components/Provider";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export default function ProveedoresGeneral({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TanstackProvider>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MaterialProvider>{children}</MaterialProvider>
      </body>
    </TanstackProvider>
  );
}
