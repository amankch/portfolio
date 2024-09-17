import React from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Github,
  LinkedinIcon,
  MessageCircleReply,
  Twitter,
} from "lucide-react";

function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex items-center justify-between h-14 px-4">
        {/* <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0"> */}
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aman. All rights reserved.
        </p>
        {/* </div> */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <Link
              href="https://wa.me/+919999004538?text=hi"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircleReply className="h-4 w-4" />
              <span className="sr-only">Whatsapp</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link
              href="https://github.com/amankch"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link
              href="https://linkedin.com/in/aman-kumar-26327a18/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link
              href="https://twitter.com/amankch"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
