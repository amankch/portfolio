import React from "react";

import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";

function Navbar() {
  return (
    <div className="flex justify-between items-center border-b px-4">
      <header className="sticky top-0 z-50 w-full  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-2xl">Aman</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#about">About</Link>
            <Link href="#skills">Skills</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#blogs">Blogs</Link>
            <Link href="#contact">Contact</Link>
          </nav>
        </div>
      </header>
      <div>
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Navbar;
