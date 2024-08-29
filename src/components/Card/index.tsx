"use client";
import React from "react";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<IProps> = ({ children, className }) => {
  return (
    <div
      className={`p-[20px] bg-white rounded-lg min-w-[308px] min-h-[246px] ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Card;