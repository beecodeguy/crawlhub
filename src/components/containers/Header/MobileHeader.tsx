"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { WebPageRoutes } from "@/constants/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react"; // Icons for hamburger menu

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="block lg:hidden">
      <nav className="container mx-auto flex py-3 justify-between items-center">
        <span className="typography-h4 text-primary">CrawlerHub</span>
        <div>
          {/* Hamburger icon */}
          <button
            className="bg-primary-foreground p-2 rounded-full"
            onClick={toggleMenu}
          >
            {isOpen ? <Icons.cross /> : <Icons.hamburger />}
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="h-screen container mx-auto flex flex-col items-center gap-4">
          <div className="flex flex-col items-start justify-start gap-4 w-full">
            {[...WebPageRoutes, { title: "Contact", href: "/contact-us" }].map(
              (route) => (
                <Link
                  key={route.title}
                  href={route.href}
                  className={route.href === pathname ? "text-primary" : ""}
                  onClick={() => setIsOpen(false)}
                >
                  {route.title}
                </Link>
              )
            )}
            <Link className="w-full" href="/login">
              <Button className="w-full" variant="outline">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default MobileHeader;
