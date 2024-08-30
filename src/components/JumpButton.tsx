"use client";

import Link from "next/link";
import React from "react";

interface IProps {
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
  label: string;
  className?: string;
}

const JumpButton: React.FC<IProps> = ({
  href = "",
  onClick,
  label,
  className,
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-primary typography-h5 font-bold ${className}`}
    >
      {label}&nbsp;&nbsp;-&gt;
    </Link>
  );
};

export default JumpButton;
