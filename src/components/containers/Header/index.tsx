import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";
import MobileHeader from "./MobileHeader";

const Header = () => {
  return (
    <>
      {" "}
      <MobileHeader />
      <header className="hidden lg:block">
        <nav className="container mx-auto flex py-3 justify-between items-center">
          <span className="typography-h4 text-primary">CrawlerHub</span>
          <NavItems />
          <div className="flex gap-4 items-center">
            <Link className="typography-b1" href="/contact-us">Contact</Link>
            <Link href="/login">
              <Button variant="outline">Sign In</Button>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
