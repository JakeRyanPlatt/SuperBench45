import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FoodFlicks – Food Review VOD Gallery",
  description: "Watch food review videos and vote thumbs up or down",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
