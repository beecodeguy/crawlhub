"use client";
import React from "react";
import IconWrapper from "../IconWrapper";
import JumpButton, { IJumpButton } from "../JumpButton";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface ICardContent {
  icon: string | StaticImport;
  description: string;
  button?: IJumpButton;
  title?: string;
}

export const CardContent: React.FC<ICardContent> = ({
  icon,
  description,
  button,
  title,
}) => (
  <div className="flex flex-col gap-3">
    <IconWrapper icon={icon} />
    {title && (
      <span className="typography-b1 font-semibold">{title}</span>
    )}
    <p className="typography-h5">{description}</p>
    {button && <JumpButton {...button} />}
  </div>
);

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<IProps> = ({ children, className }) => {
  return (
    <div
      className={`p-[20px] bg-white rounded-lg w-[308px] h-[246px] ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
