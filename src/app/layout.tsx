import type { Metadata } from "next";
import "@/app/fonts/fonts.module.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Micollego",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
