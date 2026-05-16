import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { portfolioData } from "@/lib/portfolio-data";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const { personal } = portfolioData;

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: `${personal.name} | ${personal.title}`,
    template: `%s | ${personal.name}`,
  },
  description: personal.tagline,
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "Node.js",
    "Portfolio",
    "Resume",
  ],
  authors: [{ name: personal.name }],
  openGraph: {
    title: `${personal.name} | ${personal.title}`,
    description: personal.tagline,
    url: "https://example.com",
    siteName: "Saifullah Anik Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} | ${personal.title}`,
    description: personal.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <body>{children}</body>
    </html>
  );
}
