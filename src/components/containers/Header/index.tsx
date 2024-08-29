import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";

interface IProps {
  className?: string;
}

const Header: React.FC<IProps> = ({ className }) => {
  return (
    <header className={className}>
      <nav className="page-container flex py-4 justify-between items-center">
        <span className="typography-h4 text-primary">CrawlerHub</span>
        <NavItems />
        <div className="flex gap-5 items-center">
          <Link href="">Contact</Link>
          <Button variant="outline">Sign In</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
