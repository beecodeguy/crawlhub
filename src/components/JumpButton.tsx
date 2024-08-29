"use client";

import Link from "next/link";
import React from "react";

interface IProps {
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
  label: string;
}

const JumpButton: React.FC<IProps> = ({ href = "", onClick, label }) => {
  return (
    <Link href={href} onClick={onClick} className="text-primary typography-h5">
      {label}-&gt;
    </Link>
  );
};

export default JumpButton;
