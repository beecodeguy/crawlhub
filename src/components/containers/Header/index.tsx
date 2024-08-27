import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="flex px-[80px] py-[24px] justify-between items-center">
      <div>CrawlerHub</div>
      <div className="flex items-center gap-[32px]">
        <Link href="">Home</Link>
        <Link href="">About Us</Link>
        <Link href="">Services</Link>
        <Link href="">Pricing</Link>
        <Link href="">Blog</Link>
      </div>
      <div className="flex gap-[32px] items-center">
        <Link href="">Contact</Link>
        <Button>Sign In</Button>
      </div>
    </nav>
  );
};

export default Header;
