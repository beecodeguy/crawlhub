"use client";

import { RightArrowIcon } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface IJumpButton {
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
  label: string;
  className?: string;
}

const JumpButton: React.FC<IJumpButton> = ({
  href = "",
  onClick,
  label,
  className,
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-primary typography-h5 font-bold flex gap-1 items-center ${className}`}
    >
      {label}
      <Image src={RightArrowIcon} height={16} width={16} alt="Right Arrow" />
    </Link>
  );
};

export default JumpButton;
