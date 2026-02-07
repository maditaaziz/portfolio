import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Madita – Lektorat & Korrektorat für Selfpublisher",
  description:
    "Freiberufliche Lektorin für Selfpublisher. Ich begleite Autorinnen und Autoren bei der Überarbeitung ihrer Texte mit klarem Feedback und neuen Perspektiven.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${dmSerifDisplay.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
