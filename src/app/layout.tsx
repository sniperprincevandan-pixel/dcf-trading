import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const serifFont = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#171B19",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dcftrading.com"),
  title: {
    default: "DCF Trading Pvt Ltd | Cattle Feed & Brewery Spent Grain Supplier",
    template: "%s | DCF Trading Pvt Ltd",
  },
  description:
    "DCF Trading Pvt Ltd supplies brewery and distillery spent grain (cooked barley) for cattle feed, connecting reliable bulk feed supply with commercial dairy farms through dependable business partnerships.",
  keywords: [
    "DCF Trading Pvt Ltd",
    "cattle feed supplier",
    "brewery spent grain for cattle feed",
    "distillery spent grain supply",
    "cooked barley cattle feed",
    "spent grain supplier for dairy farms",
    "bulk cattle feed supply India",
    "commercial dairy farm feed supply",
    "brewers grains supplier",
  ],
  authors: [{ name: "DCF Trading Pvt Ltd" }],
  creator: "DCF Trading Pvt Ltd",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://dcftrading.com",
    siteName: "DCF Trading Pvt Ltd",
    title: "DCF Trading Pvt Ltd | Cattle Feed & Spent Grain Supply",
    description:
      "Reliable cattle feed supply and brewery spent grain (cooked barley) for commercial dairy farms. Professional bulk supply and dependable business relationships.",
    images: [
      {
        url: "/images/dairy_cattle_hero.jpg",
        width: 1200,
        height: 630,
        alt: "DCF Trading Pvt Ltd - Commercial Cattle Feed & Spent Grain Supply",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DCF Trading Pvt Ltd | Cattle Feed & Spent Grain Supply",
    description:
      "Reliable cattle feed supply and brewery spent grain for commercial dairy farms.",
    images: ["/images/dairy_cattle_hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${serifFont.variable} ${sansFont.variable} scroll-smooth antialiased`}
      style={{ fontFamily: "var(--font-sans), sans-serif" }}
    >
      <body className="min-h-screen flex flex-col bg-[#171B19] text-[#F5F3EC]">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
