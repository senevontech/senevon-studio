import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AppProviders } from "@/components/providers/AppProviders";
import { defaultMeta } from "@/lib/site-data";
import "./globals.css";

const displayFont = localFont({
  src: "../assets/fonts/Alef-Bold.ttf",
  variable: "--font-agency",
  display: "swap",
});

const bodyFont = localFont({
  src: "../assets/fonts/Alef-Regular.ttf",
  variable: "--font-alef",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://snvstudio.com"),
  title: defaultMeta.title,
  description: defaultMeta.description,
  openGraph: {
    title: defaultMeta.title,
    description: defaultMeta.description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultMeta.title,
    description: defaultMeta.description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`} suppressHydrationWarning>
      <body>
        <AppProviders>
          <Navbar />
          {children}
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
