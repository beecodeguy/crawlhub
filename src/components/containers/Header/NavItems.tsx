"use client";

import { WebPageRoutes } from "@/constants/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavItems = () => {
  const pathname = usePathname();
  
  return (
    <div className="flex items-center gap-4">
      {WebPageRoutes.map((route) => (
        <Link
          key={route.title}
          href={route.href}
          className={route.href === pathname ? "text-primary" : ""}
        >
          {route.title}
        </Link>
      ))}
    </div>
  );
};

export default NavItems;
