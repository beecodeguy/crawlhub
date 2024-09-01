import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";

const Header = () => {
  return (
    <header>
      <nav className="container mx-auto flex py-3 justify-between items-center">
        <span className="typography-h4 text-primary">CrawlerHub</span>
        <NavItems />
        <div className="flex gap-4 items-center">
          <Link href="">Contact</Link>
          <Button variant="outline">Sign In</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
