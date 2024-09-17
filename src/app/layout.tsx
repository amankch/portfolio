import type { Metadata } from "next";
import localFont from "next/font/local";

import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/toaster";

import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

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

export const metadata: Metadata = {
  title: "Aman's Portfolio",
  description: "Full Stack Developer, from system design to development",
  applicationName: "Aman's portfolio",
  keywords: [
    "Full Stack Developer",
    "NextJS",
    "ReactJS",
    "NodeJS",
    "ExpressJS",
    "Flutter",
    "Docker",
    "Firebase",
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "Gemini AI API",
    "Open AI API",
  ],
  icons: [
    "/images/apple-touch-icon.png",
    "/images/android-chrome-192x192.png",
    "/images/android-chrome-512x512.png",
  ],
  openGraph: {
    title: "Aman's portfolio",
    description: "Full Stack Developer, from system design to development",
    url: "https://amankch.in",
    type: "website",
    images: [
      "/images/aman_03.jpeg",
      "/images/apple-touch-icon.png",
      "/images/android-chrome-192x192.png",
      "/images/android-chrome-512x512.png",
    ],

    // tags: [
    //   "Full Stack Developer",
    //   "NextJS",
    //   "ReactJS",
    //   "NodeJS",
    //   "ExpressJS",
    //   "Flutter",
    // ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main>
            <Navbar />
            {children}
            <Footer />
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
