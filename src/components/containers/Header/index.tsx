import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";

const Header = () => {
  return (
    <nav className="flex px-[80px] py-4 justify-between items-center">
      <span className="typography-h4 text-primary">CrawlerHub</span>
      <NavItems />
      <div className="flex gap-5 items-center">
        <Link href="">Contact</Link>
        <Button variant="outline">Sign In</Button>
      </div>
    </nav>
  );
};

export default Header;
