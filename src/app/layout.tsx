import type { Metadata } from "next";
import localFont from "next/font/local";

import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/toaster";

import "./globals.css";

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
  title: "Aman",
  description: "Full Stack Developer, from system design to development",
  applicationName: "Aman's Profile",
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
  ],
  icons: [
    "/images/apple-touch-icon.png",
    "/images/android-chrome-192x192.png",
    "/images/android-chrome-512x512.png",
  ],
  openGraph: {
    title: "Aman",
    description: "Full Stack Developer, from system design to development",
    url: "https://www.amankch.in",
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
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
