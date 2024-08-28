"use client";

import Link from "next/link";
import React from "react";

const NavItems = () => {
  return (
    <div className="flex items-center gap-5">
      <Link href="">Home</Link>
      <Link href="">About Us</Link>
      <Link href="">Services</Link>
      <Link href="">Pricing</Link>
      <Link href="">Blog</Link>
    </div>
  );
};

export default NavItems;
